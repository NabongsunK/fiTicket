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

    //모달 창 뒤로 배경 너무 뿌옇게 나오는 거 해결 필요!
    /* 모달 창을 위한 스타일 설정 */
    backgroundColor: "rgba(255, 255, 255, 0.9)", // 배경을 투명하지 않게 설정
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // 모달에 그림자 효과 추가
    //Index: 1000, // 모달을 다른 요소 위에 표시

    // 뒷 배경을 조절하기 위한 스타일 설정
    backdropFilter: "blur(0px)", // 배경 블러 효과 비활성화
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
                    {"  "}
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
