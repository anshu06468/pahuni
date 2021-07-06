import { getCountData } from "../../Services/GetData";
import { useState, useEffect } from "react";
import "./DisplayCount.css";
import { Link } from "react-router-dom";

const DisplayCount = () => {
  const [total, settotal] = useState();
  const [noncompliant, setnc] = useState();
  const [percent, setperc] = useState();
  useEffect(() => {
    getCountData().then((val) => {
      settotal(val.total);
      setnc(val.noncompliant);
      setperc(val.percentage);
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="card col-lg-12 col-md-12 col-12 p-3">
          {/* <div className=" card-title text-light heading px-3">Splunk dashboard </div> */}
          <div className="card-body count">
            <div className='heading'>We're almost there!!</div>
            <Link to="/table">
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                aria-valuenow={percent}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: percent + "%" }}
              >
              {percent}%
              </div>
            </div>
              </Link>
          </div>
        </div>
        <div className="card col-lg-4 col-md-4 p-0 d-lg-block d-none">
          <div className="card-body">
            <div className="card-title heading  ">Non-Compliant</div>
            <Link to="/table">
              <div className="card-text count p-0">{noncompliant}</div>
            </Link>
          </div>
        </div>
        <div className=" card col-lg-4 col-md-4  p-0 d-lg-block  d-none">
          <div className="card-body">
            <div className=" card-title  heading ">% Compliance</div>
            <div className="card-text count">{percent}%</div>
          </div>
        </div>
        <div className="card col-lg-4 col-md-4 p-0 d-lg-block  d-none ">
          <div className="card-body">
            <div className=" card-title  heading ">
              Inventory Total
            </div>
            <div className="card-text count">{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayCount;
