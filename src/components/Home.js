import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
