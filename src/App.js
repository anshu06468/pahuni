import "./App.css";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs"
import Troubleshoot from "./components/Troubleshoot/Troubleshoot"
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="row ">
          <div className=" col-lg-2 d-none d-xl-block d-lg-block pr-0 mt-5">
            <div class="side-panel largeScreen pt-3 d-md-none d-lg-block">
              <SidePanel />
            </div>
          </div>
          <div className="col-lg-10  page-body">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/troubleshoot' component={Troubleshoot}></Route>
              <Route exact path='/about' component={AboutUs}></Route>
            </Switch>

          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
