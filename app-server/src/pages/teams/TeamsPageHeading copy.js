import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
// import userPic from "../../../public/assets/images/best-02.jpg";

const TeamsPageHeading2 = function () {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="weekly-offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Best Weekly Offers In Each City</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-weekly-offers owl-carousel owl-theme">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-01.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Havana
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip - Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <a href="reservation.html">Make a Reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-02.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Kingston
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip - Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <a href="reservation.html">Make a Reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-03.jpg" alt="" />
                    <div className="text">
                      <h4>
                        George Town
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip - Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <a href="reservation.html">Make a Reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-01.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Havana
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip - Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <a href="reservation.html">Make a Reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-02.jpg" alt="" />
                    <div className="text">
                      <h4>
                        Kingston
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip - Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <a href="reservation.html">Make a Reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/offers-03.jpg" alt="" />
                    <div className="text">
                      <h4>
                        George Town
                        <br />
                        <span>
                          <i className="fa fa-users"></i> 234 Check Ins
                        </span>
                      </h4>
                      <h6>
                        $420
                        <br />
                        <span>/person</span>
                      </h6>
                      <div className="line-dec"></div>
                      <ul>
                        <li>Deal Includes:</li>
                        <li>
                          <i className="fa fa-taxi"></i> 5 Days Trip - Hotel
                          Included
                        </li>
                        <li>
                          <i className="fa fa-plane"></i> Airplane Bill Included
                        </li>
                        <li>
                          <i className="fa fa-building"></i> Daily Places Visit
                        </li>
                      </ul>
                      <div className="main-button">
                        <a href="reservation.html">Make a Reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {
                  <div className="item">
                    <div className="shadow-effect">
                      {/* <img className="img-circle" src={userPic} /> */}

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                    <div className="testimonial-name">
                      <h5>Rajon Rony</h5>
                      <small>ITALY</small>
                    </div>
                  </div>
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamsPageHeading2;
