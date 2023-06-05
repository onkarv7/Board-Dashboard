import profile from "../Assets/profile.png";
import notification from "../Assets/notification.png";
// import search from "./Assets/search.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h3 className={styles.navbar_title}>Dashboard</h3>
      <div className={styles.links}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Search ..."
          />
          {/* <img className="search-icon" src={search} alt="search" /> */}
        </div>

        <img
          className={styles.notification_icon}
          src={notification}
          alt="search"
        />
        <img className={styles.profile_icon} src={profile} alt="search" />
      </div>
    </div>
  );
};

export default Navbar;
