import './chart.css';
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getDataDough } from "../../Services/GetData";
import ChartModal from './Modal/modal';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const DoughChart = () => {
  const [dataD, setData] = useState(null);
  useEffect(() => {
    getDataDough().then((val) => {
      const data = val;
      setData(data);
      console.log(val);
    })
  }, [])

  const data = {
    datasets: [
      {
        data: dataD,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],
        // circumference: 10,
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Compliant", "Non-Compliant"],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        // display:true,
        position: "bottom",
      },
    }
    // radius:100
  };
  if (data)
    return (
      <Doughnut
        data={data}
        options={options}
      />
    );
  else
    return (
      <div>
        <LoadingSpinner></LoadingSpinner>
      </div>
    )
};
export default DoughChart;
