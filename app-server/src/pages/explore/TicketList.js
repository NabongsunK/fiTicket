import { useEffect, useState } from "react";
import TicketListItem from "./TicketListItem";
import { useSelector } from "react-redux";
import PopUp from "../../components/common/PopUp";

const TicketList = function () {
  const pageList = useSelector((state) => state.myPageSlice.pageList);
  const myFavor = useSelector((state) => state.myFavorSlice.myFavor);

  const [isActive, setIsActive] = useState(false);
  const [popText, setPopText] = useState("");

  const alertHandler = function (title) {
    setPopText(title);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  const list = pageList.map((festival) => {
    return (
      <TicketListItem
        key={festival.id}
        festival={festival}
        alertHandler={alertHandler}
        isFavor={myFavor.find((element) => {
          if (element.ticket_id == festival.id) {
            return true;
          }
        })}
      />
    );
  });
  return (
    <>
      <PopUp body={popText} isActive={isActive} />

      <div className="row">{list}</div>
    </>
  );
};

export default TicketList;
