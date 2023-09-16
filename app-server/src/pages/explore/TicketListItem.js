import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import TicketDetailItem from "./TicketDetailItem";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "70vh",
    width: "50vw",
    //marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TicketListItem = function (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const appElement = document.getElementById("root");

  if (appElement) {
    Modal.setAppElement(appElement);
  } else {
    console.error("App element not found!");
  }
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div className="col-lg-6 col-sm-3">
      <div className="item">
        <div className="row">
          <div className="col-lg-3">
            <div className="image">
              <img className="poster" src={props.festival.first_image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 align-self-center" onClick={openModal}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={openModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <TicketDetailItem
                festival={props.festival}
                openModal={openModal}
              />
            </Modal>

            <div className="content">
              <span className="info">*d-4 / 4일 후 축제가 끝나요</span>
              <h4>{props.festival.title}</h4>
              <div className="row">
                <div className="col-12">
                  <i className="fa fa-clock"></i>
                  <span className="list">
                    {props.festival.event_start_date} ~{" "}
                    {props.festival.event_end_date}
                  </span>
                </div>
              </div>
              <p>티켓 팝니다</p>
            </div>
          </div>
          <div className="col-lg-2 align-self-center">
            {/* 홈페이지 연결 */}
            <div className="explore_list_button">
              <Link to="https://www.chf.or.kr/short/8sQs" target="_blank">
                <i className="fa fa-home"></i>
              </Link>
            </div>

            {/* 장바구니 담기 */}
            <div className="explore_list_button">
              <Link to="/">
                <i className="fa fa-cart-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketListItem;
