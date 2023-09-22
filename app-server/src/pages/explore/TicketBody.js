import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import TicketList from "./TicketList";
import TicketFind from "./TicketFind";
import TicketPage from "./TicketPage";
import { move } from "../../store/pageSlice";

const TicketBody = function (props) {
  // 검색어
  const [keyword, setKeyword] = useState("");
  // 페이지별 리스트
  const [pageResult, setPageResult] = useState([]);
  const dispatch = useDispatch();

  // 키워드 바뀌면
  useEffect(() => {
    //페이징 초기화
    dispatch(move({ point: 1 }));
    //정규식으로 regionList 분리
    const regExp = new RegExp(keyword, "i");
    props.setRegionList(
      props.regionList.filter((festival) => regExp.test(festival.title))
    );
  }, [keyword]);

  //슬라이스에서 현재 페이지 가지고옴
  var page = useSelector((state) => state.viewPageSlice.page);

  // 한페이지당 출력되야되는 리스트
  const listPerPage = 4;
  // 해당페이지 첫 요소
  var skip = (page - 1) * listPerPage;

  //검색에의해서 바뀌거나 page가 바뀌면
  useEffect(() => {
    skip = (page - 1) * listPerPage;
    setPageResult(props.regionList.slice(skip, skip + listPerPage));
  }, [props.regionList, page]);

  // 마지막페이지 계산
  const lastPage = Math.floor(
    (listPerPage + props.regionList.length - 1) / listPerPage
  );

  return (
    <div className="amazing-deals">
      <div className="container">
        {/* 리스트 */}
        <TicketList pageResult={pageResult} />

        {/* 찾기 페이지 */}
        <TicketFind keyword={keyword} setKeyword={setKeyword} />

        {/* pagination */}
        <TicketPage pages={{ lastPage }} />
      </div>
    </div>
  );
};

export default TicketBody;
