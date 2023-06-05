import styles from "./Products.module.css";

const product = [
  {
    name: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    add: "at Sunset Road, Kuta, Bali ",
    color: "#9BDD7C",
  },
  {
    name: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    add: "at Central Jakarta  ",
    color: " #6972C3",
  },
];

const Products = () => {
  return (
    <div className={styles.main}>
      <div className={styles.products}>
        <div className={styles.schedule}>
          <p className={styles.text}>Today’s schedule</p>
          <p className={styles.subtext}>see all</p>
        </div>

        <div className={styles.wrapper}>
          {product.map((item) => (
            <div>
              <div className={styles.additionalDiv} data-color={item.color}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.time}>{item.time}</p>
                <p className={styles.add}>{item.add}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
