import requests
import pymysql
import time
import traceback
from urllib.parse import urlparse
import re

api = {
    'i': 0,
    'db': [
        "8k0e7yrJYAOx5tO1uOT+Qtwvas7tz9HlJd7ZV6wS1Ku6PziIPq+bAJHWKI7bmUpqwayuy8e63/tyElzOtmAgGw==",
        "3jJr15ZfXkZ5GS96tclxP4CNhg7DLUdjctnZ5KEJu2Ej3COat00EOp3vj3lAPCd41aMfcO2TYfLdQ2Y5119F6w==",
        "6l/8UQvwdYWWiJbjj+nretaNCG3OGmuhlU8dtbSj+Zvaw4Hqq7NQeb/DUIC1lnJOorVsaDToNa1IzlYsLAjK/g==",
        "xM7CQdxr9nwx9MPctsCtt/vD6cLRZUdnbfkNTo7qEWEdvM9ALhBpKOo27R6o5pnDn3fjcTCdsib2mNZH+/NTZw==",
        "vel1P1rO0LvPolc+WmfN7aD3s2dLhcfwjreeZfAqAOHzvEznLPA+TFUq15lto08/GDvbIl9++dDEpyjwEd2qMQ==",
        "bGLlTpHJqvG+Gp89r9tDLKCUfB+5wsN0iG42EZNkididu/5kb0ZcHFcTOB3liNy6yl990QV5HMiJINBkD29noQ=="

    ]
}


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


def get_areaBased(pageNo):
    apiUrl = "http://apis.data.go.kr/B551011/KorService1/areaBasedList1"
    apiKey = api["db"][api['i'] % len(api["db"])]
    api['i'] = api['i']+1
    apiParams = {
        'numOfRows': 12,
        'pageNo': pageNo,
        'MobileOS': 'ETC',
        'MobileApp': 'AppTest',
        'ServiceKey': apiKey,
        '_type': 'json',
        'listYN': 'Y',
        'arrange': 'Q',
        'contentTypeId': 14,
    }
    try:
        response = requests.get(apiUrl, apiParams, timeout=4)
        return response.json()["response"]["body"]["items"]["item"]
    except:
        # err_msg = traceback.format_exc()
        # print(err_msg)
        print(api["i"]-1, "번째 api key 에서 문제발생")
        return []


def get_festival(pageNo):
    apiUrl = "http://apis.data.go.kr/B551011/KorService1/searchFestival1"
    apiKey = api["db"][api['i'] % len(api["db"])]
    api['i'] = api['i']+1
    apiParams = {
        'numOfRows': 12,
        'pageNo': pageNo,
        'MobileOS': 'ETC',
        'MobileApp': 'AppTest',
        'ServiceKey': apiKey,
        '_type': 'json',
        'listYN': 'Y',
        'arrange': 'Q',
        'eventStartDate': 20230925,
        'eventEndDate': 20231225,

    }
    try:
        response = requests.get(apiUrl, apiParams, timeout=4)
        print("HTTP 응답 코드:", response.status_code)
        print("HTTP 응답 메시지:", response.text)

        return response.json()["response"]["body"]["items"]["item"]
    except:
        # err_msg = traceback.format_exc()
        # print(err_msg)
        print(api["i"]-1, "번째 api key 에서 문제발생")
        return []


def get_detailCommon1(data):
    apiUrl = "http://apis.data.go.kr/B551011/KorService1/detailCommon1"
    apiKey = api["db"][api['i'] % len(api["db"])]
    api['i'] = api['i']+1
    apiParams = {
        'MobileOS': 'ETC',
        'MobileApp': 'AppTest',
        'ServiceKey': apiKey,
        '_type': 'json',
        'contentId': data["contentid"],
        'defaultYN': 'Y',
        'overviewYN': 'Y',
    }
    try:
        response = requests.get(apiUrl, apiParams, timeout=4)
        print("HTTP 응답 코드:", response.status_code)
        print("HTTP 응답 메시지:", response.text[:1000])
        new_data = response.json()["response"]["body"]["items"]["item"][0]
        homepage = ""
        overview = ""
        if (new_data["homepage"]):
            homepage = extract_url_from_homepage(new_data["homepage"])
        if (new_data["overview"]):
            overview = remove_html_tags(new_data["overview"])
        return dict(
            {"homepage": homepage, "overview": overview}, **data)
    except:
        # err_msg = traceback.format_exc()
        # print(err_msg)
        print(api["i"]-1, "번째 api key 에서 문제발생")
        return {}


def get_detailIntro1(data):
    apiUrl = "http://apis.data.go.kr/B551011/KorService1/detailIntro1"
    apiKey = api["db"][api['i'] % len(api["db"])]
    api['i'] = api['i']+1
    apiParams = {
        'MobileOS': 'ETC',
        'MobileApp': 'AppTest',
        'ServiceKey': apiKey,
        '_type': 'json',
        'contentId': data["contentid"],
        'contentTypeId': data["contenttypeid"],
    }
    try:
        response = requests.get(apiUrl, apiParams, timeout=4)
        print("HTTP 응답 코드:", response.status_code)
        print("HTTP 응답 메시지:", response.text[:1000])
        new_data = response.json()["response"]["body"]["items"]["item"][0]
        return dict(
            {"eventstartdate": new_data["eventstartdate"], "eventenddate": new_data["eventenddate"],
             "playtime": new_data["playtime"], "usetimefestival": new_data["usetimefestival"]}, **data)
    except:
        # err_msg = traceback.format_exc()
        # print(err_msg)
        print(api["i"]-1, "번째 api key 에서 문제발생")
        return {}


def pushDB(res):
    print(res)
    try:
        conn = pymysql.connect(
            host="13.124.253.233",
            user="localticket",
            password="Localticket12$$",
            db="localticket",
            charset="utf8mb4",
        )

        cursor = conn.cursor()

        insert_query = """
            INSERT INTO festival_api (addr1, addr2, content_id, first_image, first_image2, tel, title, map_x, map_y, area_code,
                content_type_id, cat1, cat2, cat3, cpyrhtDivCd, m_level, modified_time, si_gun_gu_code, zip_code,home_page,
                over_view, event_start_date, event_end_date, play_time, use_time_festival)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
                    %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,
                    %s, %s, %s, %s, %s)
            ON DUPLICATE KEY UPDATE
            content_id = VALUES(content_id);
            """

        for data in res:
            cursor.execute(
                insert_query,
                (
                    data.get("addr1"),
                    data.get("addr2"),
                    data.get("contentid"),
                    data.get("firstimage"),
                    data.get("firstimage2"),
                    data.get("tel"),
                    data.get("title"),
                    data.get("mapx"),
                    data.get("mapy"),
                    data.get("areacode"),
                    #
                    data.get("contenttypeid"),
                    data.get("cat1"),
                    data.get("cat2"),
                    data.get("cat3"),
                    data.get("cpyrhtDivCd"),
                    data.get("mlevel"),
                    data.get("modifiedtime"),
                    data.get("sigungucode"),
                    data.get("zipcode"),
                    data.get("homepage"),
                    #
                    data.get("overview"),
                    data.get("eventstartdate"),
                    data.get("eventenddate"),
                    data.get("playtime"),
                    data.get("usetimefestival"),
                ),
            )
        conn.commit()
        conn.close()

        return True
    except:
        err_msg = traceback.format_exc()
        print(err_msg)
        return False


def main():
    pageNo = 1
    total_pages = 5000
    while pageNo <= total_pages:
        print(f"{pageNo} 페이지 실행 시작")
        ret = get_festival(pageNo)

        if not ret:
            print(f"{pageNo} 페이지의 가져오기 실패. 30초 후에 다시시작")
            time.sleep(30)
            continue

        items = []
        i = 0
        while i < len(ret):
            item = ret[i]
            ret2 = get_detailCommon1(item)
            if not ret2:
                print(
                    f"{pageNo} 페이지의 {item['contentid']} 가져오기 실패. 30초 후에 다시시작")
                time.sleep(30)
                continue
            if item["contenttypeid"] and int(item["contenttypeid"]) == 15:
                time.sleep(3)
                ret3 = get_detailIntro1(ret2)
                if not ret3:
                    print(
                        f"{pageNo} 페이지의 {item['contentid']} 시간 가져오기 실패. 30초 후에 다시시작")
                    time.sleep(30)
                    continue
                ret2 = ret3

            items.append(ret2)
            i += 1
            time.sleep(3)

        retF = pushDB(items)

        if not retF:
            print(f"{pageNo} 페이지의 넣기실패.")
            break

        print(f"{pageNo} 페이지의 데이터가 데이터베이스에 저장되었습니다.")

        pageNo += 1
        time.sleep(3)


if __name__ == "__main__":
    main()
