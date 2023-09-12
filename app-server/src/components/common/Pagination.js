import { Link, useSearchParams } from "react-router-dom";



const Pagination= function(props){
   
  
  
  return (
    <div className="col-lg-12">
      <ul className="page-numbers">
        <li><Link to="" onClick={goPrev}><i className="fa fa-arrow-left"></i></Link></li>
        <li className="active"><Link to="#">1</Link></li>
        <li><Link to="#">2</Link></li>
        <li><Link to="#">3</Link></li>
        <li><Link to="" onClick={goNext}><i className="fa fa-arrow-right"></i></Link></li>
      </ul>
    </div>

  );
};

export default Pagination;