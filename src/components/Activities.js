import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Activities.module.css";

const SplineChart = ({ dataSets }) => {
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: dataSets.map((dataSet) => ({
      label: "Activities",
      data: dataSet.data,
      fill: false,
      borderColor: dataSet.color,
      tension: 0.4,
    })),
  };

  return (
    <div className={styles.activities}>
      <Line className={styles.line} data={chartData} options={{}} />
    </div>
  );
};

const Activities = () => {
  const dataSets = [
    { data: [100, 420, 150, 450, 180, 220], color: "green" },
    { data: [200, 350, 200, 280, 210, 450], color: "red" },
  ];

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.activity_title}>Activities</h3>
      <SplineChart dataSets={dataSets} />
    </div>
  );
};

export default Activities;
