import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SplineChart = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Activities",
        data: [{}],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <h1>Spline Chart</h1>
      <Line data={data} options={{}} />
    </div>
  );
};

export default SplineChart;
