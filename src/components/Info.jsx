import React from "react";

import styles from "./Drawer/Drawer.module.scss";

// import SearchContext from '../context';

const Info = ({ onCloseCart, title, img }) => {
  // const {} = React.useContext(SearchContext)
  return (
    <div className={styles.drawer__cartEmpty}>
      <img src={img} alt="icon" />
      <h3>{title}</h3>
      <button onClick={onCloseCart}>get back</button>
    </div>
  );
};

export default Info;
