import { useState } from "react";

const FAQItem = function ({ FAQDetail }) {
  const { id, header, answer } = FAQDetail;

  const [isFold, setFold] = useState("false");
  const foldToggle = function () {
    setFold(!isFold);
  };

  return (
    <div className="col-lg-12">
      <div className="info-item row">
        <div key={id} className="col-12">
          <h4 className="faq_header">
            <button
              key={id}
              className={isFold ? " fold" : " unfold"}
              onClick={foldToggle}
            >
              {header}
            </button>
          </h4>
          <div className="col-10">
            {" "}
            <br />
            <span className={isFold ? "fold-on" : "fold-off"}>{answer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
