import requests
import pymysql
import xml.etree.ElementTree as ET
import time
import datetime
from urllib.parse import urlparse
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import re

def extract_url_from_homepage(homepage):
    parsed = urlparse(homepage)
    if parsed.scheme and parsed.netloc:
        return homepage
    match = re.search("(https?://[^\s]+)", homepage)
    if match:
        return match.group(0)
    return None

def remove_html_tags(text):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

def fetch_data_from_api(pageNo):
    api_url = f"http://apis.data.go.kr/B551011/KorService1/searchFestival1?eventStartDate=20230916&eventEndDate=20240213&areaCode=&sigunguCode=&ServiceKey=6l%2F8UQvwdYWWiJbjj%2BnretaNCG3OGmuhlU8dtbSj%2BZvaw4Hqq7NQeb%2FDUIC1lnJOorVsaDToNa1IzlYsLAjK%2Fg%3D%3D&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=12&pageNo={pageNo}"

    retries = Retry(total=5, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
    session = requests.Session()
    session.mount('http://', HTTPAdapter(max_retries=retries))

    try:
        response = session.get(api_url, timeout=120)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"API 요청 오류: {e}")
        return 0

    root = ET.fromstring(response.content)
    items = root.findall(".//item")
    data_list = []

    for item in items:
        content_id = item.find("contentid").text
        area_code_element = item.find("areacode")
        area_code = int(area_code_element.text) if area_code_element is not None else None

        api_detail_url = f"http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=6l%2F8UQvwdYWWiJbjj%2BnretaNCG3OGmuhlU8dtbSj%2BZvaw4Hqq7NQeb%2FDUIC1lnJOorVsaDToNa1IzlYsLAjK%2Fg%3D%3D&contentTypeId=15&contentId={content_id}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y"

        try:
            response_detail = session.get(api_detail_url)
            response_detail.raise_for_status()
            root_detail = ET.fromstring(response_detail.content)
            homepage = remove_html_tags(root_detail.findtext(".//homepage", default=""))
            url_from_homepage = extract_url_from_homepage(homepage)

            overview_element = root_detail.find(".//item/overview")
            overview = remove_html_tags(overview_element.text) if overview_element is not None else None
        except requests.RequestException as e:
            print(f"상세 정보 API 요청 오류: {e}")
            continue

        if overview is None:
            continue

        api_time_festival_url = f"http://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=TEST&contentId={content_id}&contentTypeId=15&serviceKey=xM7CQdxr9nwx9MPctsCtt%2FvD6cLRZUdnbfkNTo7qEWEdvM9ALhBpKOo27R6o5pnDn3fjcTCdsib2mNZH%2B%2FNTZw%3D%3D"

        try:
            response_time_festival = session.get(api_time_festival_url)
            response_time_festival.raise_for_status()
        except requests.RequestException as e:
            print(f"페스티벌 시간 API 요청 오류: {e}")
            continue

        root_time_festival = ET.fromstring(response_time_festival.content)
        usetimefestival = remove_html_tags(root_time_festival.findtext(".//usetimefestival", default=""))
        playtime = root_time_festival.findtext(".//playtime", default="")

        data = {
            "addr1": item.findtext("addr1"),
            "addr2": item.findtext("addr2"),
            "area_code": area_code,
            "cat1": "A02",
            "cat2": "A0207",
            "cat3": "A02070200",
            "content_id": content_id,
            "content_type_id": 15,
            "created_time": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "first_image": item.findtext("firstimage"),
            "first_image2": item.findtext("firstimage2"),
            "cpyrhtDivCd": None,
            "map_x": item.findtext("mapx"),
            "map_y": item.findtext("mapy"),
            "m_level": None,
            "modified_time": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "si_gun_gu_code": item.findtext("sigungucode"),
            "tel": item.findtext("tel"),
            "title": item.findtext("title"),
            "zip_code": item.findtext("zipcode"),
            "use_time_festival": usetimefestival,
            "event_start_date": item.findtext("eventstartdate"),
            "play_time": playtime,
            "event_end_date": item.findtext("eventenddate"),
            "home_page": url_from_homepage,
            "over_view": overview,
        }

        if url_from_homepage or overview:
            data_list.append(data)

    if not data_list:
        print("데이터베이스 저장 오류")
        return 0

    try:
        conn = pymysql.connect(
            host="43.202.150.252",
            user="localticket",
            password="Localticket12$$",
            db="localticket",
            charset="utf8mb4",
        )

        cursor = conn.cursor()

        # MySQL에 데이터를 삽입하는 쿼리문
        insert_query = """
        INSERT INTO festival_api (
            addr1, addr2, area_code, cat1, cat2, cat3, content_id, content_type_id, created_time, first_image, first_image2, cpyrhtDivCd, map_x, map_y, m_level, modified_time, si_gun_gu_code, tel, title, zip_code, use_time_festival, event_start_date, play_time, event_end_date, home_page, over_view) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) 
            ON DUPLICATE KEY UPDATE 
            addr1=VALUES(addr1), 
            addr2=VALUES(addr2),
            area_code=VALUES(area_code), 
            cat1=VALUES(cat1), 
            cat2=VALUES(cat2), 
            cat3=VALUES(cat3),
            content_id=VALUES(content_id), 
            content_type_id=VALUES(content_type_id),
            created_time=VALUES(created_time),
            first_image=VALUES(first_image), 
            first_image2=VALUES(first_image2),
            cpyrhtDivCd=VALUES(cpyrhtDivCd),
            map_x=VALUES(map_x),
            map_y=VALUES(map_y),
            m_level=VALUES(m_level),
            modified_time=VALUES(modified_time),
            si_gun_gu_code=VALUES(si_gun_gu_code),
            tel=VALUES(tel),
            title=VALUES(title),
            zip_code=VALUES(zip_code),
            use_time_festival=VALUES(use_time_festival),
            event_start_date=VALUES(event_start_date),
            play_time=VALUES(play_time),
            event_end_date=VALUES(event_end_date),
            home_page=VALUES(home_page),
            over_view=VALUES(over_view)
        """

        for data in data_list:
            cursor.execute(
                insert_query,
                (
                    data.get("addr1", None),
                    data.get("addr2", None),
                    data["area_code"],
                    data["cat1"],
                    data["cat2"],
                    data["cat3"],
                    data.get("content_id", None),
                    data["content_type_id"],
                    data["created_time"],
                    data.get("first_image", None),
                    data.get("first_image2", None),
                    data.get("cpyrhtDivCd", None),
                    data["map_x"],
                    data["map_y"],
                    data.get("m_level", None),
                    data["modified_time"],
                    data["si_gun_gu_code"],
                    data.get("tel", None),
                    data["title"],
                    data.get("zip_code", None),
                    data.get("use_time_festival", None),
                    data.get("event_start_date", None),
                    data.get("play_time", None),
                    data.get("event_end_date", None),
                    data.get("home_page", None),
                    data.get("over_view", None),
                ),
            )

        conn.commit()
    except pymysql.Error as e:
        print(f"데이터베이스 오류: {e}")
    finally:
        conn.close()

    return len(data_list)

def main():
    total_pages = 23
    for pageNo in range(1, total_pages + 1):
        print(f"페이지 {pageNo}의 데이터를 가져오는 중...")
        saved_count = fetch_data_from_api(pageNo)
        if saved_count:
            print(f"{pageNo} 페이지에서 데이터베이스에 {saved_count}개의 레코드를 저장했습니다.")
        time.sleep(60)

if __name__ == "__main__":
    main()