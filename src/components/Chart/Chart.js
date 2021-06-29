import LineChart from "./LineChart";
import DoughChart from "./DoughChart";
import ChartModal from "./Modal/modal";
import "./chart.css"
function Chart() {
  return (
    <div className="container-fluid">
      <div className="chart-body row m-5">
        <div className="col-lg-7 col-xl-7 col-md-9  col-sm-12 col-12 m-auto p-4">
          <div className='linechart'>
            <LineChart></LineChart>
            <a
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Show..
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-xl-5 col-md-9 col-sm-12 col-12 m-auto p-4">
          <div>
            <div className="doughnutchart">
              <DoughChart></DoughChart>
              <a
                data-toggle="modal"
                data-target="#doughnutModal"
              >
                Show..
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-11 m-auto tableChart">
          <table className="table">
            <tr>
              <td>LineChart</td>
              <td><i class="fa fa-chart-line"></i></td>
              <td><a
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View..
              </a></td>
            </tr>
            <tr>
              <td>DoughChart</td>
              <td><i class="fa fa-chart-pie"></i></td>
              <td><a
                data-toggle="modal"
                data-target="#doughnutModal"
              >
                View..
              </a></td>
            </tr>
          </table>

        </div>
      </div>

      <ChartModal id="doughnutModal" chart={<DoughChart />}></ChartModal>
      <ChartModal id="exampleModal" chart={<LineChart />}></ChartModal>



    </div>
  );
}

export default Chart;
