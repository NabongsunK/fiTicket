import axios from "axios";
import { useEffect, useState } from "react";

//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const {kakao} = window;

// x:경도 y:위도 로 지역찾기
const getAdress = async function (x, y) {
  try {
    const res = await axios.get("https://dapi.kakao.com/v2/local/geo/coord2regioncode.json", {
      params: {
        x: x,
        y: y
      },
      headers: {
        Authorization: "KakaoAK 8e8301f6d873da44dfc2345e960bae20"
      }
    });
    return res.data.documents[0].address_name;
  } catch (error) {
    // 오류 처리
    console.error('오류:', error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
}
// 쿼리로 경위도 찾기
const getItude = async function (query="서울") {
  try {
    const res = await axios.get("https://dapi.kakao.com/v2/local/search/address.json", {
      params: {
        query:  query
      },
      headers: {
        Authorization: "KakaoAK 8e8301f6d873da44dfc2345e960bae20"
      }
    });
    if(res.data.documents[0]){
      return ([res.data.documents[0].x,res.data.documents[0].y]);
    }
    else return ([126.978652258309,37.566826004661])
    
  } catch (error) {
    // 오류 처리
    console.error('오류:', error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
}



const Map= function(){
  const [mapItude,setMapItude] = useState([126.978652258309,37.566826004661])
  const onChangeQuery = async function (e){
    if(e.target.value){
      return setMapItude(await getItude(e.target.value))
    }
  }

  useEffect(function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(mapItude[1],mapItude[0]), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', async function(mouseEvent) { 
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng;
        
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다. \n';
        message += '지역은 ' + await getAdress(latlng.getLng(),latlng.getLat()) + ' 입니다.';
        
        var resultDiv = document.getElementById('result'); 
        resultDiv.innerHTML = message;
    });

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
          
          var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
          
          var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
          
          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition, message);
              
        });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      
      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
          message = 'geolocation을 사용할수 없어요..'
          
      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({  
          map: map, 
          position: locPosition
      }); 
      
      var iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
      });
      
      // 인포윈도우를 마커위에 표시합니다 
      infowindow.open(map, marker);
      
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);      
    }    
    
  },[mapItude])
  return(
    <>
    {/* x,y */}
      <div className="form-outline mb-4">
        <input type="text" id="form2Example1" className="form-control" onChange={onChangeQuery}/>
        {/* 여기에 검색도중 추천리스트가 나오게 설정 */}
      
        <label className="form-label" htmlFor="form2Example1">지역</label>
      </div>

      <div id="map" style ={{
        width:'100%',
        height:'550px'
      }}>

      </div>
      <div id="result"></div>
    </>
    
  )
}

export default Map;