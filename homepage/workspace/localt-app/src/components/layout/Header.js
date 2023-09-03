import { Link, NavLink } from "react-router-dom";

const Header= function(){
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src="assets/images/logo.png" alt="" />
              </Link>
              <ul className="nav">
                <li><NavLink to="/ ">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/deals">Deals</NavLink></li>
                <li><NavLink to="/books">티켓 찾기</NavLink></li>
                <li><NavLink to="/reservation">Book Yours</NavLink></li>
              </ul>   
              <Link className='menu-trigger'>
                  <span>Menu</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;