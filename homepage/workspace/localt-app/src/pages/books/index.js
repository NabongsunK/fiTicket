import { Link } from "react-router-dom";
import Loading from "../../components/common/Loading";

const Books= function(){
  return (
    <>
      <div className="second-page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Book Prefered Deal Here</h4>
              <h2>Make Your Reservation</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttersi labore et dolore magna aliqua is ipsum suspendisse ultrices gravida</p>
              <div className="main-button"><Link to="/books">Discover More</Link></div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info reservation-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="info-item">
                <i className="fa fa-phone"></i>
                <h4>Make a Phone Call</h4>
                <Link to="#">+123 456 789 (0)</Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="info-item">
                <i className="fa fa-envelope"></i>
                <h4>Contact Us via Email</h4>
                <Link to="#">company@email.com</Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="info-item">
                <i className="fa fa-map-marker"></i>
                <h4>Visit Our Offices</h4>
                <Link to="#">24th Street North Avenue London, UK</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reservation-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" 
                 width="100%" height="450px" styles={{border:'0', borderTopLeftRadius: '23px', borderTopRightRadius: '23px'}} allowFullScreen=""></iframe>
              </div>
            </div>
            <div className="col-lg-12">
            <div class="amazing-deals">
              <div class="container">

                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading text-center">
                      <h2>Best Weekly Offers In Each City</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-3">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="image">
                            <img src="assets/images/deals-01.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                          <div className="content">
                            <span className="info">*Limited Offer Today</span>
                            <h4>Glasgow City Lorem</h4>
                            <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>

                          </div>
                        </div>
                        <div className="col-lg-3 align-self-center">
                          <div className="main-button">
                            <Link to="reservation.html">Make a Reservation</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-3">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="image">
                            <img src="assets/images/deals-01.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                          <div className="content">
                            <span className="info">*Limited Offer Today</span>
                            <h4>Glasgow City Lorem</h4>
                            <div className="row">
                              <div className="col-6">
                                <i className="fa fa-clock"></i>
                                <span className="list">5 Days</span>
                              </div>
                              <div className="col-6">
                                <i className="fa fa-map"></i>
                                <span className="list">Daily Places</span>
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>

                          </div>
                        </div>
                        <div className="col-lg-3 align-self-center">
                          <div className="main-button">
                            <Link to="reservation.html">Make a Reservation</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-3">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="image">
                            <img src="assets/images/deals-01.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                          <div className="content">
                            <span className="info">*Limited Offer Today</span>
                            <h4>Glasgow City Lorem</h4>
                            <div className="row">
                              <div className="col-6">
                                <i className="fa fa-clock"></i>
                                <span className="list">5 Days</span>
                              </div>
                              <div className="col-6">
                                <i className="fa fa-map"></i>
                                <span className="list">Daily Places</span>
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet dire consectetur adipiscing elit.</p>

                          </div>
                        </div>
                        <div className="col-lg-3 align-self-center">
                          <div className="main-button">
                            <Link to="reservation.html">Make a Reservation</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <ul className="page-numbers">
                      <li><Link to="#"><i className="fa fa-arrow-left"></i></Link></li>
                      <li><Link to="#">1</Link></li>
                      <li className="active"><Link to="#">2</Link></li>
                      <li><Link to="#">3</Link></li>
                      <li><Link to="#"><i className="fa fa-arrow-right"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
              
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Books;