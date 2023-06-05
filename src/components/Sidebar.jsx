// new
import React, { useState } from "react";
import dashboard from "../Assets/dashboard.png";
import transactions from "../Assets/transactions.png";
import schedule from "../Assets/schedule.png";
import user from "../Assets/user.png";
import setting from "../Assets/setting.png";
import styles from "./Home.module.css";
import { FaBars } from "react-icons/fa";

export const sidebar = [
  {
    title: "Dashboard",
    img: dashboard,
  },
  {
    title: "Transactions",
    img: transactions,
  },
  {
    title: "Schedules",
    img: schedule,
  },
  {
    title: "Users",
    img: user,
  },
  {
    title: "Settings",
    img: setting,
  },
  {
    title: "Dashboard",
    img: dashboard,
  },
];

const sidebar2 = [
  { title: "Help" },
  {
    title: "Contact Us",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <FaBars />
      </div>
      <h2>Board.</h2>
      <div className={styles.sides}>
        {sidebar.map((item) => (
          <div className={styles.sidebar_links}>
            <img src={item.img} alt={item.title} />
            <div className={styles.sidebar_title}>{item.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.side}>
        {sidebar2.map((sidebar) => (
          <p className={styles.side_links}>{sidebar.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
