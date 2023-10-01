import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import localInfos from "../../data/localInfos.json";
import { pushList, setPageList } from "../../store/pageSlice";
import { setMapItude } from "../../store/mapSlice";

import styles from "./map.module.css";
import { useNavigate } from "react-router";

var markerHeight = { 28: 72, 14: 36, 15: 36, 39: 0 };
var markerImageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png"; // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const { kakao } = window;

const Map = function (props) {
  // 여긴 나중에 주차장 들어오면 추가하고 이미지도 수정해야할듯+상세정보 보기도 추가
  const mapItude = useSelector((state) => state.myMapSlice.mapItude);
  const mapData = useSelector((state) => state.myMapSlice.mapData);
  const regionId = useSelector((state) => state.myMapSlice.regionId);
  const navigate = useNavigate();
  //let map = useRef(null);
  //let clusterer = useRef(null);
  const map = useRef(null);
  const clusterer = useRef(null);

  let polygons = useRef([]);
  var infoWindows = [];
  const dispatch = useDispatch();
  const allList = useSelector((state) => state.myPageSlice.allList);

  var markers_group = useRef({ 14: [], 15: [], 39: [], 28: [] });

  const menusRefs = {
    14: useRef(null),
    15: useRef(null),
    39: useRef(null),
    28: useRef(null),
  };

  function getInfo() {
    // 지도의 현재 중심좌표를 얻어옵니다
    var center = map.current.getCenter();

    var message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
    message += "경도 " + center.getLng() + " 이고 <br>";
    dispatch(
      setMapItude({ newMapItude: [center.getLng(), center.getLat(), 4] })
    );
  }

  function changeMarker(type) {
    clusterer.current.clear();
    // var Menus = {};
    // for (var key in mapData) {
    //   Menus[key] = document.getElementById("category_" + key);
    // }

    ["14", "15", "39", "28"].forEach((tp) => {
      if (tp === type) {
        menusRefs[tp].current.className = styles.menu_selected;
        setMarkers(map.current, tp);
        clusterer.current.addMarkers(markers_group.current[tp]);
      } else {
        menusRefs[tp].current.className = "";
        setMarkers(null, tp);
      }
    });
  }

  function closeInfoWindow() {
    infoWindows.forEach((infowindow) => infowindow.close());
  }

  // 마커들의 지도 표시 여부를 설정하는 함수입니다
  function setMarkers(map, type) {
    for (var i = 0; i < markers_group.current[type].length; i++) {
      markers_group.current[type][i].setMap(map);
      // 클러스터러에 마커들을 추가합니다
    }
  }

  //첫마운트 될때,
  useEffect(function () {
    map.current = new kakao.maps.Map(map.current, {
      // 지도를 표시할 div
      center: new kakao.maps.LatLng(35.95, 128.25), // 지도의 중심좌표
      level: mapItude[2], // 지도의 확대 레벨
    });
    // 마커 클러스터러를 생성합니다
    clusterer.current = new kakao.maps.MarkerClusterer({
      map: map.current, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });
  }, []);

  // mapdata 바뀔때
  useEffect(
    function () {
      for (var key in mapData) {
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        var markers = mapData[key].map(function (position) {
          // 마커이미지와 마커를 생성합니다
          var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {
              spriteOrigin: new kakao.maps.Point(10, markerHeight[key]),
              spriteSize: new kakao.maps.Size(36, 98),
            };
          var markerImage = new kakao.maps.MarkerImage(
            markerImageSrc,
            imageSize,
            imageOptions
          );
          var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.map_y, position.map_x),
            clickable: true,
            image: markerImage,
          });

          //여기에 title 말고도 first_image2 , addr1, 들어갈 수 있게
          // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다

          var content = `
            <div className=${styles.wrap}>
              <div className=${styles.info} style="width: 100%, height: 100%">
                <div className=${styles.title}>
                    ${position.title}
                  <div className="close" style="width:15%" title="닫기"></div>
                </div>
                <div className="body">
                  <div className="img">
                    <img src=${position.first_image2} width="73" height="70"/>
                  </div>
                  <div className="desc">
                    <div className="ellipsis">
                      ${position.addr1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;

          // 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: content,
            removable: true,
          });
          // 마커 위에 인포윈도우를 표시합니다
          infoWindows.push(infowindow);

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "click", async () => {
            navigate("/explore");
            closeInfoWindow();
            infowindow.open(map.current, marker);
            if (position.content_type_id === "15") {
              const festival = allList.filter(
                (fes) => fes.id === Number(position.id)
              )[0];
              dispatch(pushList({ newPage: festival }));
            }
          });

          return marker;
        });
        markers_group.current[key] = markers;
      }
      changeMarker("15");
    },
    [mapData]
  );

  // mapItude변경될때
  useEffect(
    function () {
      const boundary = localInfos[regionId].boundary;
      if (boundary) {
        boundary.forEach((ss) => {
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
      return () => {
        if (boundary) {
          polygons.current.forEach((pl) => {
            pl.setMap(null);
            delete polygons[0];
          });
        }
      };
    },
    [regionId]
  );
  // mapItude바뀌면 위치바뀜
  useEffect(() => {
    if (mapItude[1]) {
      map.current.setCenter(new kakao.maps.LatLng(mapItude[1], mapItude[0]));
      map.current.setLevel(mapItude[2]);
    }
  }, [mapItude]);

  return (
    <div id={styles.mapwrap}>
      <div ref={map} style={{ width: "100%", height: "550px" }}></div>
      <div onClick={getInfo}>버튼</div>
      <div className={styles.category}>
        <ul>
          <li
            ref={menusRefs["15"]}
            onClick={() => {
              changeMarker("15");
            }}
          >
            <span className={styles.ico_store}></span>
            축제
          </li>
          <li
            ref={menusRefs["39"]}
            onClick={() => {
              changeMarker("39");
            }}
          >
            <span className={styles.ico_coffee}></span>
            음식점
          </li>
          <li
            ref={menusRefs["28"]}
            onClick={() => {
              changeMarker("28");
            }}
          >
            <span className={styles.ico_carpark}></span>
            주차장
          </li>
          <li
            ref={menusRefs["14"]}
            onClick={() => {
              changeMarker("14");
            }}
          >
            <span className={styles.ico_carpark}></span>
            내위치
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
