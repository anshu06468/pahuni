import './header.css';
import SidePanel from '../SidePanel/SidePanel';
import logo from './../../assets/images/splunklogo.jpg'
import React, { useEffect } from 'react';
function Header() {
  const ref = React.createRef();
  useEffect(() => {
    ref.current.style.right = '-200px'
  }, [])
  function toggle(e) {
    var rht = ref.current.style.right;
    if (rht === "-200px") {
      ref.current.style.right = "0px";
    }
    else {
      ref.current.style.right = "-200px";

    }
  }

  return (
    <nav className="header-navbar navbar fixed-top navbar-dark bg-dark justify-content-between">
      <div className="d-flex">
        <a className="navbar navbar-brand" href="#">
          <img src={logo}
            width="30" height="30" className="d-inline-block align-top" alt="" />
        </a>
        <div className="d-sm-block d-none">
          <a className="title-navbar navbar-brand" href="#">
            Welcome to Splunk Dashboard
          </a>
        </div>
        <div className="d-xl-none d-lg-none d-md-none d-sm-none">
          <a className="title-navbar navbar-brand" href="#">
            Dashboard
          </a>
        </div>
      </div>
      <div className="mx-2 d-xl-none d-lg-none">
        <button class="navbar-toggler" type="button" onClick={toggle}>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="navbar-collapse">
        <div class="side-panel d-xl-none d-lg-none pt-3" ref={ref} >
          <SidePanel />
        </div>
      </div>

    </nav>

  )
}

export default Header
