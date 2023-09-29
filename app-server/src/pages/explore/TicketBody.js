import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import TicketList from "./TicketList";
import TicketFind from "./TicketFind";
import TicketPage from "./TicketPage";
import { setPage, setPageList, setRegionList } from "../../store/pageSlice";
import { useOutletContext } from "react-router";

const TicketBody = function () {
  // 검색어
  const [keyword, setKeyword] = useState("");
  // 페이지별 리스트
  const dispatch = useDispatch();
  const regionList = useSelector((state) => state.myPageSlice.regionList);
  const mapItude = useSelector((state) => state.myPageSlice.mapItude);
  //슬라이스에서 현재 페이지 가지고옴
  const page = useSelector((state) => state.myPageSlice.page);

  // 키워드 바뀌면
  useEffect(() => {
    //페이징 초기화
    dispatch(setPage({ newPage: 1 }));
    //정규식으로 regionList 분리
    const regExp = new RegExp(keyword, "i");
    const newRegionList = regionList.filter((festival) =>
      regExp.test(festival.title)
    );
    dispatch(setRegionList({ newRegionList: newRegionList }));
  }, [keyword]);

  // 한페이지당 출력되야되는 리스트
  const listPerPage = 4;
  // 해당페이지 첫 요소
  var skip = (page - 1) * listPerPage;

  //검색에의해서 바뀌거나 page가 바뀌면
  useEffect(() => {
    skip = (page - 1) * listPerPage;
    dispatch(
      setPageList({
        newPageList: regionList.slice(skip, skip + listPerPage),
      })
    );
  }, [regionList, page, mapItude]);

  // 마지막페이지 계산
  const lastPage = Math.floor(
    (listPerPage + regionList.length - 1) / listPerPage
  );

  return (
    <div className="amazing-deals">
      <div className="container">
        {/* 리스트 */}
        <TicketList />

        {/* 찾기 페이지 */}
        <TicketFind keyword={keyword} setKeyword={setKeyword} />

        {/* pagination */}
        <TicketPage lastPage={lastPage} />
      </div>
    </div>
  );
};

export default TicketBody;
