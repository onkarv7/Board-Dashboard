import styles from "./Top.module.css";
import { userData } from "./Dummy";

import { useState } from "react";
import PieChart from "./PieChart";

const Top = () => {
  const [usersData, setUserData] = useState({
    labels: userData.map((item) => item.name),
    datasets: [
      {
        label: "Top Products",
        data: userData.map((data) => data.qty),
        backgroundColor: [" #98D89E", "  #F6DC7D", "#EE8484"],
      },
    ],
  });

  return (
    <div className={styles.top}>
      <div className={styles.title}>
        <h3>Top Products</h3>
        <div>May - June 2021</div>
      </div>

      <PieChart chartData={usersData} />
    </div>
  );
};
export default Top;
