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
    //제대로 뽑아왔으면
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
  //경도,위도,사이즈
  const [mapItude,setMapItude] = useState([126.978652258309,37.566826004661,8])
  //onchange되면
  const onChangeQuery = async function (e){
    if(e.target.value){
      return setMapItude([...await getItude(e.target.value),3])
    }
  }

  //첫마운트 될때
  useEffect(function(){
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        setMapItude([lon,lat,8]);            
      });
  }
  },[])
  //MapItude 바뀔때
  // 여기서 지도를 계속 생성안해도 되는 방법은 없을까?
  useEffect(function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(mapItude[1],mapItude[0]), // 지도의 중심좌표
        level: mapItude[2] // 지도의 확대 레벨
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
      }}/>

      {/* 여기서 왜 새로고침할때마다 새로되는거지?? 이거 state쓰면안될듯 */}
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
        <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
        <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
        <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
      </div>

      <div id="result"/>
    </>
    
  )
}

export default Map;