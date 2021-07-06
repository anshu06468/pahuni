import "./chart.css";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getDataDough, getData } from "../../Services/GetData";
import ChartModal from '../../components/Modal/Modal';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const DoughChart = () => {
  getData();
  const [dataD, setData] = useState(null);
  useEffect(() => {
    getDataDough().then((val) => {
      const data = val;
      setData(data);
      console.log(val);
    });
  }, []);

  const data = {
    datasets: [
      {
        data: dataD,
        backgroundColor: ["#52D726", "#ffff33"],
        // circumference: 10,

      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Compliant", "Non-Compliant"],
  };
  const options = {
    cutout: '70%',
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        // display:true,
        position: "right",
      },
    },
    radius: '80%',
    // innerRadius:95,
  };
  if (dataD) {
    return (
      <div className="">
        <div className=" doughnutchart text-right">
          <div className="  d-none d-md-block d-xl-block d-lg-block pr-0 pb-0">
            <Doughnut data={data} options={options} />
          </div>
          <div className='modal-box'>
            <div className='d-lg-block d-md-block d-none'>
              <a data-toggle="modal" data-target="#doughnutModal">
                <i class="fas fa-expand"></i>
              </a>
            </div>
            <div className='d-lg-none d-md-none d-block text-center'>

              <a data-toggle="modal" data-target="#doughnutModal">
                Compliance Reach <i class="fas fa-expand"></i>
              </a>
            </div>
          </div>
        </div>


        <ChartModal id="doughnutModal" chart={<Doughnut data={data} options={options} />}></ChartModal>
      </div>
    )
  }
  else {
    return (
      <div className="">
        <div className="doughnutchart">
          <div className=" d-none d-md-flex d-xl-flex d-lg-flex justify-content-center pr-0 ">
            <LoadingSpinner></LoadingSpinner>
          </div>

        </div>
      </div>
    )
  }
};

export default DoughChart;
