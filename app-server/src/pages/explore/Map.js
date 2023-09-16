import { useEffect } from "react";
import chicken from "../../data/chicken.json";
//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const { kakao } = window;

const Map = function (props) {
  //첫마운트 될때, props변경될때
  console.log(props);
  useEffect(
    function () {
      var map = new kakao.maps.Map(document.getElementById("map"), {
        // 지도를 표시할 div
        center: new kakao.maps.LatLng(props.mapItude[1], props.mapItude[0]), // 지도의 중심좌표
        level: props.mapItude[2], // 지도의 확대 레벨
      });

      // 마커 클러스터러를 생성합니다
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
      var data = chicken["positions"];
      var markers = data.map(function (position) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(position.lat, position.lng),
          clickable: true,
        });

        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, marker);
        });

        return marker;
      });

      // 클러스터러에 마커들을 추가합니다
      clusterer.addMarkers(markers);

      // 언마운트시;
      return function () {
        kakao.maps.event.removeListene;
      };
    },
    [props]
  );

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "550px",
      }}
    />
  );
};

export default Map;
