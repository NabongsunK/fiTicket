import requests

api_key = '7f17a4648ce34e9aae5c8b68b9ae9e16'

url = 'http://www.kopis.or.kr/openApi/restful/pblprfr?'
params = {
    'service': api_key,
    'stdate': '20230601',
    'eddate': '20230630',
    'cpage': '1',
    'rows': '30',

}
response = requests.get(url,params)

if response.status_code == 200:
    data = response.text
    print(data)
else:
    print('API 요청 실패:', response.status_code)