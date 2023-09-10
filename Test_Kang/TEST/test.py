import requests
import pymysql
import xml.etree.ElementTree as ET


# API로부터 데이터 가져오기
def fetch_data_from_api(apiUrl):
    response = requests.get(apiUrl)
    response.raise_for_status()

    try:
        root = ET.fromstring(response.content)

        
        item = root.find(".//item")  

        
        if item is None:
            print("API 응답에 item 태그가 없습니다.")
            return None

        data = {
            "addr1": item.find("addr1").text
            if item.find("addr1") is not None
            else None,
            "addr2": item.find("addr2").text
            if item.find("addr2") is not None
            else None,
            "contentid": item.find("contentid").text
            if item.find("contentid") is not None
            else None,
            "firstimage": item.find("firstimage").text
            if item.find("firstimage") is not None
            else None,
            "firstimage2": item.find("firstimage2").text
            if item.find("firstimage2") is not None
            else None,
            "tel": item.find("tel").text if item.find("tel") is not None else None,
            "title": item.find("title").text
            if item.find("title") is not None
            else None,
            "mapx": item.find("mapx").text if item.find("mapx") is not None else None,
            "mapy": item.find("mapy").text if item.find("mapy") is not None else None,
        }
        return data
    except ET.ParseError:
        print("API가 XML 형식으로 응답하지 않았습니다.")
        return None


# MySQL DB에 데이터 저장하기
def save_to_db(data):
    if not data:
        print("데이터가 없어 데이터베이스에 저장할 수 없습니다.")
        return


    # MySQL 데이터베이스 연결 설정
    conn = pymysql.connect(
        host='localhost',
        user="root",
        password="1234",
        db="mydb",
        charset="utf8mb4",
    )

    cursor = conn.cursor()

    insert_query = """
        INSERT INTO test_HSM (addr1, addr2, contentid, firstimage, firstimage2, tel, title, mapx, mapy)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(
        insert_query,
        (
            data["addr1"],
            data["addr2"],
            data["contentid"],
            data["firstimage"],
            data["firstimage2"],
            data["tel"],
            data["title"],
            data["mapx"],
            data["mapy"],
        ),
    )
    conn.commit()
    conn.close()



apiUrl = "http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=xM7CQdxr9nwx9MPctsCtt%2FvD6cLRZUdnbfkNTo7qEWEdvM9ALhBpKOo27R6o5pnDn3fjcTCdsib2mNZH%2B%2FNTZw%3D%3D&listYN=Y&arrange=A&contentTypeId=15&areaCode=&sigunguCode=&cat1=A02&cat2=A0207&cat3=A02070200"
print("실행시작")
data = fetch_data_from_api(apiUrl)
print("api데이터 받아오기 완료")
save_to_db(data)
