import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ChartModal from "../../components/Modal/Modal";
import { getData } from "../../Services/GetData";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const LineChart = () => {
  const [dataS, setDataS] = useState(null);
  useEffect(() => {
    getData().then((val) => {
      const x = val;
      const y = x[0];
      const z = x[1];
      const temp = {
        chartData: {
          labels: y,
          datasets: [
            {
              label: "Count of the status",
              data: z,
              backgroundColor: [
                "#52D726"
              ],
              borderColor: ["rgb(54, 162, 235)"],
              borderWidth: 1,
            },
          ],
        },
      };
      setDataS(temp.chartData);
    });
  }, []);

  const options = {
    grouped: true,
    maintainAspectRatio: true,
    responsive: true,
    alignToPixels: true,
    scales: {
      x: {
        ticks: {
          color: ["rgba(23,37,42,1)"],
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };
  if (dataS) {
    return (
      <div className="pb-1">
        <div className="linechart text-right">
          <div className="d-none d-md-block d-xl-block d-lg-block">
            <Line height="60" data={dataS} options={options} />
          </div>
          {/* <a data-toggle="modal" data-target="#exampleModal">
            Statuswise Count..
          </a> */}
          <div className='d-lg-block d-md-block d-none'>
            <a data-toggle="modal" data-target="#exampleModal">
              <i class="fas fa-expand"></i>
            </a>
          </div>
          <div className='d-lg-none d-md-none d-block text-center'>

            <a data-toggle="modal" data-target="#exampleModal">
              Statuswise Count <i className="fas fa-expand"></i>
            </a>
          </div>
        </div>
        <ChartModal
          id="exampleModal"
          chart={<Line data={dataS} options={options} />}
        ></ChartModal>
      </div>
    );
  } else {
    return (
      <div className="pb-1">
        <div className="linechart">
          <div className="d-none d-md-flex d-xl-flex d-lg-flex justify-content-center">
            <LoadingSpinner></LoadingSpinner>
          </div>
        </div>
      </div>
    );
  }
};
export default LineChart;
