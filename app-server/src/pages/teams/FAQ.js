import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQ = function () {
  const faqlist = [
    {
      id: 1,
      header: "Loca!T는 무슨 의미인가요?",
      answer:
        "대한민국 전국 각 지방에서 개최되는 축제들을 소개하고 각종 티켓을 제공하는 사이트입니다.",
    },
    {
      id: 2,
      header: "Loca!T 이용 방법을 알려주세요.",
      answer:
        "지도에서 방방곡곡 진행되는 축제들을 탐색하거나 Loca!T에서 추천하는 축제들을 살펴보시고 티켓을 구매해서 참여하세요. 그리고 로그인하는 것도 잊지마세요!",
    },
    {
      id: 3,
      header: "Loca!T는 왜 지역 축제 티켓을 파나요?",
      answer:
        "전국의 축제들에 참여해서 지역 발전에 도움을 주고 재미있는 축제도 즐기시기 바랍니다.",
    },
    {
      id: 4,
      header: "Loca!T는 뭐하는 사이트인가요?",
      answer:
        "우리 주변에 있지만 미쳐 알지 못했던 다양한 행사들을 소개하고 참여시 더욱 합리적으로 이용할 수 있게 도와주는 Loca!T입니다.",
    },
  ];

  const faqdetail = faqlist.map((item) => (
    <FAQItem key={item.id} FAQDetail={item} />
  ));

  return (
    <div className="more-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="left-image">
              <div className="image">
                <img src="/assets/images/about-left-image.jpg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>자주 물어보는 질문</h2>
              <p>Loca!T에 대해 궁금하신 내용들을 모아서 알려드립니다</p>
            </div>
            <div className="row"> {faqdetail} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
