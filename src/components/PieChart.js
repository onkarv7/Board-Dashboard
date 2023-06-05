// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// const PieChart = ({ chartData }) => {
//   return <Pie style={{ width: "145px", height: "145px" }} data={chartData} />;
// };

// export default PieChart;

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 50,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = chartData.labels[context.dataIndex];
            const value = chartData.datasets[0].data[context.dataIndex];
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return <Pie className="pie_chart" data={chartData} options={options} />;
};

export default PieChart;
