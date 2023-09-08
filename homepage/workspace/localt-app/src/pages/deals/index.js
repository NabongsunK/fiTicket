import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import DealsListItem from "./DealsListItem";

const Deal= function(props){

  // const list= props.festivals.map(festival => {
  //   return (
  //     <DealsListItem key={festival.id} festival={festival} />
  //   );
  // });

    // 페이징 처리
    const [searchParams, setSearchParams]= useSearchParams();
    const page= Number(searchParams.get('page') || 1);
  
    const listPerPage= 4;
    const lastPage= Math.floor((listPerPage+props.festivals.length-1)/listPerPage);
    const skip= (page-1) * listPerPage;
  
    const pageResult= props.festivals.slice(skip, skip+listPerPage);
  
    
    const goPrev= function(){
      if(page === 2){
        searchParams.delete('page');
      }else if(page > 2){
        searchParams.set('page', page-1);
      }
      setSearchParams(searchParams);
    };
  
    const goNext= function(){
      if(page < lastPage){
        searchParams.set('page',page+1);
        setSearchParams(searchParams);
      }
    };
  
    const list= pageResult.map(festival => <DealsListItem key={festival.id} festival={festival} />);
  
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Discover Our Weekly Offers</h4>
              <h2>Amazing Prices &amp; More</h2>
              <div className="border-button"><Link to="about.html">Discover More</Link></div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form id="search-form" name="gs" method="submit" role="search" action="#">
                <div className="row">
                  <div className="col-lg-2">
                    <h4>Sort Deals By:</h4>
                  </div>
                  <div className="col-lg-4">
                      <fieldset>
                          <select name="Location" className="form-select" aria-label="Default select example" id="chooseLocation" /* onChange="this.form.click()" */>
                              <option defaultValue>지역</option>
                              <option type="checkbox" name="option1" value="Italy">Italy</option>
                              <option value="France">France</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Australia">Australia</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Singapore">Singapore</option>
                          </select>
                      </fieldset>
                  </div>
                  <div className="col-lg-4">
                      <fieldset>
                          <select name="Price" className="form-select" aria-label="Default select example" id="choosePrice" /* onChange="this.form.click()" */>
                              <option defaultValue>행사 분야</option>
                              <option value="100">$100 - $250</option>
                              <option value="250">$250 - $500</option>
                              <option value="500">$500 - $1,000</option>
                              <option value="1000">$1,000 - $2,500</option>
                              <option value="2500+">$2,500+</option>
                          </select>
                      </fieldset>
                  </div>
                  <div className="col-lg-2">                        
                      <fieldset>
                          <button className="border-button">Search Results</button>
                      </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="amazing-deals">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Best Weekly Offers In Each City</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

            {/* 추천 행사 리스트 */}
            {list}





            <div className="col-lg-12">
              <ul className="page-numbers">
                <li><Link to="" onClick={goPrev}><i className="fa fa-arrow-left"></i></Link></li>
                <li><Link to="#">1</Link></li>
                <li className="active"><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="" onClick={goNext}><i className="fa fa-arrow-right"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Are You Looking To Travel ?</h2>
              <h4>Make A Reservation By Clicking The Button</h4>
            </div>
            <div className="col-lg-4">
              <div className="border-button">
                <Link to="reservation.html">Book Yours Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Deal;