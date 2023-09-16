import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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

const appElement = document.getElementById("root");

if (appElement) {
  Modal.setAppElement(appElement);
} else {
  console.error("App element not found!");
}

const TicketDetailItem = function (props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal(e) {
    setIsOpen(!modalIsOpen);
    console.log("모달 닫기");
    (e) => e.stopPropagation();
  }

  useEffect(() => {
    console.log(modalIsOpen);
  }, [modalIsOpen]);

  return (
    <div className="col-lg-12 col-sm-3">
      <div className="item">
        <div className="row">
          <div className="col-lg-2">
            <div className="image">
              <img src={props.festival.firstimage} alt="" />
            </div>
          </div>
          {/* col-lg-6 align-self-center가 리스트 중 하나를 다차지하는 태그 여기 어느 부분을 눌러도 팝업창 띄우기 */}
          <div className="col-lg-6 align-self-center" onClick={openModal}>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                {props.festival.title}
              </h2>
              <form>
                <div className="content">
                  <i className="fa fa-clock"></i>
                  <h3 className="list">
                    {props.festival.eventstartdate} ~{" "}
                    {props.festival.eventenddate}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vestibulum euismod dolor vel bibendum. Integer a
                    tristique augue. Vivamus bibendum odio at quam convallis, eu
                    fringilla tellus viverra. Sed id malesuada sapien. Sed vitae
                    odio a ante venenatis fermentum vel quis justo. Fusce non
                    lacinia lectus. Nullam tincidunt quam eget justo convallis,
                    eget gravida turpis auctor. Donec sed urna non dui vulputate
                    tempor nec ut ligula. Aenean et elit vel
                  </p>
                </div>
                <br />
                <br />
              </form>
              <button onClick={closeModal}>close</button>
            </Modal>
            <div className="content">
              <span className="info">*궁중 다도 체험</span>
              <h4>{props.festival.title}</h4>
              <div className="row">
                <div className="col-6">
                  <i className="fa fa-clock"></i>
                  <span className="list">
                    {props.festival.eventstartdate} ~{" "}
                    {props.festival.eventenddate}
                  </span>
                </div>
                <div className="col-6">
                  <i className="fa fa-map"></i>
                  <span className="list">다과세트 할인</span>
                </div>
              </div>
              <p>경복궁 생과방에서 진행시 필요한 다과 세트 할인</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailItem;
