import React from "react";

import styles from "./Orders.module.scss";

import SearchContext from "../../context";
import Card from "../../components/Card/Card";

const Orders = () => {
  const { orderedItems } = React.useContext(SearchContext);

  return (
    <section
      className={styles.orders}
      style={{ height: `${orderedItems.length !== 0 ? "100%" : "100vh"}` }}
    >
      <div className="container orders__container">
        <h1 className={styles.orders__title}>your orders</h1>
        <ul className={styles.orders__list}>
          {orderedItems.length !== 0 ? (
            orderedItems.map((item, index) => {
              return <Card {...item} key={`${item}__${index}`} />;
            })
          ) : (
            <h3
              style={{ width: "100vh", fontSize: "30px", textAlign: "center" }}
            >
              currently this page is empty
            </h3>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Orders;
