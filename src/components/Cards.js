// import "./styles.css";
import styles from "./Cards.module.css";

import cards1 from "../Assets/cards1.png";
import cards2 from "../Assets/cards2.png";
import cards3 from "../Assets/cards3.png";
import cards4 from "../Assets/cards4.png";
const cards = [
  {
    title: "Total Revenues",
    subtitle: "$2,129,430",
    img: cards1,
    color: "#DDEFE0",
  },
  {
    title: "Total Transactions",
    subtitle: "1,520",
    img: cards2,
    color: "#F4ECDD",
  },
  {
    title: "Total Likes",
    subtitle: "9,721",
    img: cards3,
    color: "#EFDADA",
  },
  {
    title: "Total Users",
    subtitle: "892",
    img: cards4,
    color: "#DEE0EF",
  },
];

const Cards = () => {
  return (
    <div>
      <div className={styles.cards}>
        {cards.map((item) => (
          <div
            className={styles.mycard}
            style={{ backgroundColor: item.color }}
          >
            <img src={item.img} alt={item.title} />
            <div className={styles.card_title}> {item.title}</div>

            <div className={styles.card_subtitle}>{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
