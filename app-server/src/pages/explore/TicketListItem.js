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
          <div className="col-lg-2">
            <div className="image">
              <img src={props.festival.first_image} alt="" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center" onClick={openModal}>
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
              <span className="info">*궁중 다도 체험</span>
              <h4>{props.festival.title}</h4>
              <div className="row">
                <div className="col-12">
                  <i className="fa fa-clock"></i>
                  <span className="list">
                    {props.festival.eventstartdate} ~{" "}
                    {props.festival.eventenddate}
                  </span>
                </div>
              </div>
              <p>경복궁 생과방에서 진행시 필요한 다과 세트 할인</p>
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
