import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { move, next, prev } from "../../store/pageSlice";

const TicketPage = function (props) {
  //페이징 처리
  const dispatch = useDispatch();
  const page = useSelector((state) => state.viewPageSlice.page);

  // 페이지 갯수
  const totalPage = [];
  for (
    let i = Math.max(1, page - 2);
    i <= Math.min(props.pages.lastPage, Math.max(page + 2, 5));
    i++
  ) {
    totalPage.push(i);
  }
  // TODO:

  // 페이지 버튼
  const pageButtons = totalPage.map((paging) => (
    <li key={paging} className={paging === page ? "active" : ""}>
      <Link
        onClick={() => {
          // 누른 페이지로 이동
          dispatch(move({ point: paging }));
        }}
      >
        {paging}
      </Link>
    </li>
  ));

  return (
    //  pagination
    <div className="col-lg-12">
      <div>{`총 ${props.pages.lastPage} 페이지 있습니다.`}</div>
      <ul className="page-numbers">
        <li>
          <Link
            to=""
            onClick={() => {
              if (page > 1) {
                dispatch(prev({ step: 1 }));
              }
            }}
          >
            <i className="fa fa-arrow-left"></i>
          </Link>
        </li>

        {pageButtons}

        <li>
          <Link
            to=""
            onClick={() => {
              if (page < props.pages.lastPage) {
                dispatch(next({ step: 1 }));
              }
            }}
          >
            <i className="fa fa-arrow-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TicketPage;
