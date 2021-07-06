import LineChart from "./LineChart";
import DisplayCount from '../DisplayCount/DisplayCount';
import DoughChart from "./DoughChart";
function Chart() {
  return (
    <div className="container-fluid">
      <div className="row m-5">
      <div className="col-lg-7 col-md-8 col-12">
          <DisplayCount/> 
      </div>
      <div className="col-lg-5 col-md-4 col-12">
            <div>
            <DoughChart></DoughChart>
            </div>
      </div>
      <div className="col-lg-12 col-md-12 col-12">
      {/* <div className="row"> */}
        <div className="col-lg-12 col-md-12 col-12 px-0 m-0 pt-3">
            <LineChart></LineChart>
        </div>

        {/* </div> */}
      </div>

      </div>
    </div>
  );
}

export default Chart;
