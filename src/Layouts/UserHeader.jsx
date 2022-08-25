import React from 'react'
// import Signup from './Signup';
// import Login from './Login';
import Notification from './Notification';
import Signup1 from './Signup1';
import Login1 from './Login1';
// import Notification1 from './Notification1';

const UserHeader = () => {
  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="header fixed-top d-flex align-items-center">
  
      <div className="d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt=""/>
          <span className="d-none d-lg-block">RE<span>O</span>N </span>
        </a>
        {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
      </div>
      {/* <!-- End Logo --> */}


  
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
    <div style={{paddingTop:"25px"}}>
      <Login1/>
      <Signup1/>
    </div>
  
    <Notification/>
  
          <li className="nav-item dropdown pe-3">
  
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
              <img src="assets/img/AATHAV.png" alt="Profile" className="rounded-circle"/>
              {/* <span className="d-none d-md-block dropdown-toggle ps-2 theme-text-blue">Super Admin</span> */}
            </a>
  
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li>
                <hr className="dropdown-divider"/>
              </li>
  
  
              <li>
                <a className="dropdown-item d-flex align-items-center" href="/">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>
  
            </ul>
            {/* <!-- End Profile Dropdown Items --> */}
          </li>
          {/* <!-- End Profile Nav --> */}
  
        </ul>
      </nav>
      {/* <!-- End Icons Navigation --> */}
  
    </header>
    
  );
}

export default UserHeader