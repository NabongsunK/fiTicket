import axios from "axios";
import { useEffect, useState } from "react";
import chicken from "../../data/chicken.json";
import localInfos from "../../data/localInfos.json";
//스크립트로 가져온 kakao map api를 윈도우 전역객체에서 받아옴
const { kakao } = window;

// x:경도 y:위도 로 지역찾기
const getAdress = async function (x, y) {
  try {
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json",
      {
        params: {
          x: x,
          y: y,
        },
        headers: {
          Authorization: "KakaoAK 8e8301f6d873da44dfc2345e960bae20",
        },
      }
    );
    return res.data.documents[0].address_name;
  } catch (error) {
    // 오류 처리
    console.error("오류:", error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
};
// 쿼리로 경위도 찾기
const getItude = async function (query = "서울") {
  try {
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/search/address.json",
      {
        params: {
          query: query,
        },
        headers: {
          Authorization: "KakaoAK 8e8301f6d873da44dfc2345e960bae20",
        },
      }
    );
    //제대로 뽑아왔으면
    if (res.data.documents[0]) {
      return [res.data.documents[0].x, res.data.documents[0].y];
    } else return [126.978652258309, 37.566826004661];
  } catch (error) {
    // 오류 처리
    console.error("오류:", error);
    throw error; // 오류를 상위로 전파하거나 다른 방식으로 처리할 수 있습니다.
  }
};
const Map = function () {
  //경도,위도,사이즈
  const [mapItude, setMapItude] = useState([
    126.978652258309, 37.566826004661, 8,
  ]);
  //onchange되면
  const onChangeQuery = async function (e) {
    if (e.target.value) {
      return setMapItude([...(await getItude(e.target.value)), 3]);
    }
  };
  //첫마운트 될때
  useEffect(function () {
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        setMapItude([lon, lat, 8]);
      });
    }

    var map = new kakao.maps.Map(document.getElementById("map"), {
      // 지도를 표시할 div
      center: new kakao.maps.LatLng(mapItude[1], mapItude[0]), // 지도의 중심좌표
      level: mapItude[2], // 지도의 확대 레벨
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
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
  }, []);

  // MapItude 바뀔때
  // 여기서 지도를 계속 생성안해도 되는 방법은 없을까?
  // useEffect(function () {
  //   // 지도에 클릭 이벤트를 등록합니다
  //   // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
  //   kakao.maps.event.addListener(map, "click", async function (mouseEvent) {
  //     // 클릭한 위도, 경도 정보를 가져옵니다
  //     var latlng = mouseEvent.latLng;

  //     var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
  //     message += "경도는 " + latlng.getLng() + " 입니다. \n";
  //     message +=
  //       "지역은 " +
  //       (await getAdress(latlng.getLng(), latlng.getLat())) +
  //       " 입니다.";

  //     var resultDiv = document.getElementById("result");
  //     resultDiv.innerHTML = message;
  //   });
  // }, []);

  const LocalSelectItem = function ({ localInfo }) {
    return (
      <>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id={"btnradio" + localInfo.id}
          autoComplete="off"
          defaultChecked={localInfo.defaultChecked}
        />
        <label
          className="btn btn-outline-primary"
          htmlFor={"btnradio" + localInfo.id}
        >
          {localInfo.localTitle}
        </label>
      </>
    );
  };
  const LocalSelectList = localInfos.map((localInfo) => (
    <LocalSelectItem key={localInfo.id} localInfo={localInfo} />
  ));

  return (
    <>
      {/* x,y */}
      <div className="form-outline mb-4">
        <input type="text" id="form2Example1" className="form-control" />
        {/* 여기에 검색도중 추천리스트가 나오게 설정 */}

        <label className="form-label" htmlFor="form2Example1">
          지역
        </label>
      </div>

      <div
        id="map"
        style={{
          width: "100%",
          height: "550px",
        }}
      />

      {/* 여기서 왜 새로고침할때마다 새로되는거지?? 이거 state쓰면안될듯 */}
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {LocalSelectList}
      </div>

      <div id="result" />
    </>
  );
};

export default Map;
