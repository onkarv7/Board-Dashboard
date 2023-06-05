import Cards from "./Cards";
// import "./Dashboard.css";
import Navbar from "./Navbar";
import Activities from "./Activities";
import Top from "./Top";
import Products from "./Products";
// import "./styles.css";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <Cards />
      <Activities />
      <div className={styles.footer}>
        <Top />
        <Products />
      </div>
    </div>
  );
};

export default Dashboard;
