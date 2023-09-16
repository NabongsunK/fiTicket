import { Link } from "react-router-dom";

const DealsPageHeading= function(){
  return (
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4>Loca!T가 추천하는 행사</h4>
            <h2>다양한 축제들이 여러분을 기다립니다</h2>
            <h2>지금 바로 즐겨보세요!</h2>
            <div className="border-button">
              <Link to="/login">로그인하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPageHeading;