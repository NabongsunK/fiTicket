import { useEffect } from "react";
import TicketListItem from "./TicketListItem";

const TicketList = function (props) {
  const list = props.pageResult.map((festival) => {
    return <TicketListItem key={festival.id} festival={festival} />;
  });

  return <div className="row">{list}</div>;
};

export default TicketList;
