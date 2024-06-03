import React from "react";

import styles from "./Orders.module.scss";

import SearchContext from "../../context";
import Card from "../../components/Card/Card";

const Orders = () => {
  const { orderedItems } = React.useContext(SearchContext);

  return (
    <section className={styles.orders}>
      <div className="container orders__container">
        <h1 className={styles.orders__title}>your orders</h1>
        <ul className={styles.orders__list}>
          {orderedItems.map((item, index) => {
            return <Card {...item} key={`${item}__${index}`} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Orders;
