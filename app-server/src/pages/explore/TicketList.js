import { Link, useSearchParams } from "react-router-dom";
import TicketListItem from "./TicketListItem";
//import TicketDetailItem from "./TicketDetailItem";

const TicketList = function (props) {
  //페이징 처리
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const listPerPage = 4;
  const lastPage = Math.floor(
    (listPerPage + props.festivals.length - 1) / listPerPage
  );
  const skip = (page - 1) * listPerPage;

  const pageResult = props.festivals.slice(skip, skip + listPerPage);

  const goPrev = function () {
    if (page === 2) {
      searchParams.delete("page");
    } else if (page > 2) {
      searchParams.set("page", page - 1);
    }
    setSearchParams(searchParams);
  };

  const goNext = function () {
    if (page < lastPage) {
      searchParams.set("page", page + 1);
      setSearchParams(searchParams);
    }
  };

  const list = pageResult.map((festival) => (
    <TicketListItem key={festival.id} festival={festival} />
  ));

  return (
    <div className="amazing-deals">
      <div className="container">
        <div className="row">
          {list}

          {/* pagination */}
          <div className="col-lg-12">
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
              <li className="active">
                <Link to="#">1</Link>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link
                  to=""
                  onClick={() => {
                    if (page < lastPage) {
                      dispatch(next({ step: 1 }));
                    }
                  }}
                >
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketList;
