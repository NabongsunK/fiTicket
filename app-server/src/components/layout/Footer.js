import { Link } from "react-router-dom";

const Footer = function () {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              Copyright © 2036 <Link to="#">WoOx Travel</Link> Company. All
              rights reserved.
              <br />
              Design:{" "}
              <Link
                to="https://templatemo.com"
                target="_blank"
                title="free CSS templates"
              >
                TemplateMo
              </Link>
              Distribution:{" "}
              <Link to="https://themewagon.com" target="_blank">
                ThemeWagon
              </Link>
              <br />
              Loca!T 대표번호: 070-9376-0983 KG이니시스 구매안전 서비스[test]  LocalTicketkorea@localt.kr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
