import axios from "axios";
import { useEffect, useState } from "react";

//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const {kakao} = window;
const test = async function(){
  const result = await getAdress(127.1086228, 37.4012191);
  console.log('주소 정보:', result);
}
const getAdress = async function (x, y) {
  try {
    const res = await axios.get("https://dapi.kakao.com/v2/local/geo/coord2regioncode.json", {
      Params: {
        'x': x,
        'y': y
      },
      Headers: {
        'Authorization': "KakaoAK 8e8301f6d873da44dfc2345e960bae20"
      }
    });

    return res.data;
  } catch (error) {
    // 오류 처리
    console.error('오류:', error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
}


test()


const Map= function(){
  const [x,setLoginX] = useState('')
  const [y,setLoginY] = useState('')

  
  useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(parseInt(x), parseInt(y)), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) { 
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng;
        
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        
        var resultDiv = document.getElementById('result'); 
        resultDiv.innerHTML = message;
        
    });
    
  },[x,y])
  return(
    <>
    {/* x,y */}
      <div className="form-outline mb-4">
        <input type="number" id="form2Example1" className="form-control" onChange={e=>setLoginX(e.target.value)}/>
        <input type="number" id="form2Example1" className="form-control" onChange={e=>setLoginY(e.target.value)}/>
        <label className="form-label" htmlFor="form2Example1">X/Y</label>
      </div>

      <div id="map" style ={{
        width:'1000px',
        height:'500px'
      }}>

      </div>
      <div id="result"></div>
    </>
    
  )
}

export default Map;