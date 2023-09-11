import { useEffect } from "react";

//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const {kakao} = window;

const Map= function(){
  
  useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
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
    
  },[])
  return(
    <>
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