import { useEffect, useRef } from "react";
// import chicken from "../../data/chicken.json";

//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const { kakao } = window;

const Map = function (props) {
  let map = useRef(null);
  let polygons = useRef([]);
  var infoWindows = [];

  function closeInfoWindow() {
    infoWindows.forEach((infowindow) => infowindow.close());
  }

  //첫마운트 될때,
  useEffect(function () {
    map.current = new kakao.maps.Map(document.getElementById("map"), {
      // 지도를 표시할 div
      center: new kakao.maps.LatLng(35.95, 128.25), // 지도의 중심좌표
      level: props.mapItude[2], // 지도의 확대 레벨
    });

    // 마커 클러스터러를 생성합니다
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map.current, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
    var markers = props.data.map(function (position) {
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.map_y, position.map_x),
        clickable: true,
      });

      // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
      var iwContent = `<div style="padding:5px;">${[position.title]}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });
      infoWindows.push(infowindow);
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        closeInfoWindow();
        infowindow.open(map.current, marker);
      });

      return marker;
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
  }, []);

  // props변경될때
  useEffect(
    function () {
      if (props.boundary) {
        props.boundary.forEach((ss) => {
          var path = [];
          ss.forEach((x) => {
            path.push(new kakao.maps.LatLng(x[1], x[0]));
          });

          // 다각형을 생성하고 지도에 표시합니다
          let polygon = new kakao.maps.Polygon({
            map: map.current,
            path: [path], // 좌표 배열의 배열로 하나의 다각형을 표시할 수 있습니다
            strokeWeight: 2,
            strokeColor: "#b26bb2",
            strokeOpacity: 0.3,
            fillColor: "#f9f",
            fillOpacity: 0.2,
          });

          polygons.current.push(polygon);
          //지도에 다각형을 보이게합니다.
          polygon.setMap(map.current);
        });
      }

      if (props.mapItude[1]) {
        map.current.setCenter(
          new kakao.maps.LatLng(props.mapItude[1], props.mapItude[0])
        );
        map.current.setLevel(props.mapItude[2]);
      }
      return () => {
        if (props.boundary) {
          polygons.current.forEach((pl) => {
            pl.setMap(null);
            delete polygons[0];
          });
        }
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
