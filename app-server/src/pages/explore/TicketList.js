import { useEffect, useState } from "react";
import TicketListItem from "./TicketListItem";

const TicketList = function (props) {
  const [isActive, setActive] = useState("false");
  const alertHandler = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 3000);
  };

  const list = props.pageResult.map((festival) => {
    return (
      <TicketListItem
        key={festival.id}
        festival={festival}
        alertHandler={alertHandler}
      />
    );
  });

  return (
    <>
      {/* 알람창 놓고싶은데 넣기*/}
      <div
        className={
          isActive ? "toast toast-3s fade hide" : "toast toast-3s fade show"
        }
        role="alert"
        aria-live="assertive"
        data-delay="3000"
        aria-atomic="true"
        style={{ position: "absolute", right: "30%", zIndex: 200 }}
      >
        <div className="toast-header" style={{ backgroundColor: "#22b3c1" }}>
          <img
            src="assets/images/logo2.png"
            alt=""
            className="img-fluid m-r-5"
            style={{ width: "150px" }}
          />
          <strong className="mr-auto"></strong>
          <small className="text-muted"></small>
        </div>
        <div className="toast-body">
          <strong className="mr-auto">티켓이 장바구니에 담겼습니다.</strong>
        </div>
      </div>

      <div className="row">{list}</div>
    </>
  );
};

export default TicketList;
