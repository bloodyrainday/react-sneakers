import React from "react";

import SearchContext from "../../context";
import Info from "../Info";

import styles from "./Drawer.module.scss";

const Drawer = ({ onCloseCart, openedCart }) => {
  const {
    cartItems = [],
    removeSneakersFromCart,
    setCartItems,
    setOrderedItems,
    countTotalPrice,
  } = React.useContext(SearchContext);

  const [ordered, setOrdered] = React.useState(false);
  const makeOrder = (order) => {
    setOrderedItems(order);
    setCartItems([]);
    cartItems.length >= 0 && setOrdered(true);
  };

  return (
    <div className={`${styles.drawer} ${openedCart ? styles.visible : ""}`}>
      <div className={styles.drawer__block}>
        <div className={styles.drawer__header}>
          <h3 className={styles.drawer__title}>CART</h3>
          <img
            src="images/close-btn.svg"
            alt="close-btn"
            onClick={onCloseCart}
          />
        </div>

        {cartItems.length === 0 ? (
          <Info
            onCloseCart={onCloseCart}
            img={
              ordered ? "images/completed-order.svg" : "images/empty-cart.svg"
            }
            title={
              ordered
                ? "Congratulations! your order has been completed :)"
                : "the Cart is empty at this moment :("
            }
          />
        ) : (
          <>
            <div className={styles.drawer__cartList}>
              {cartItems.map((item, index) => {
                return (
                  <div
                    className={styles.drawer__cartItem}
                    key={`${item}__${index}`}
                  >
                    <img
                      className={styles.drawer__cartItem_img}
                      src={item.img}
                      alt="sneakers"
                    />
                    <div className={styles.drawer__cartItem_desc}>
                      <p>{item.title}</p>
                      <span>{item.price} </span>
                    </div>
                    <img
                      className={styles.drawer__close_btn}
                      src="images/close-btn.svg"
                      alt="close-btn"
                      onClick={() => removeSneakersFromCart(item.id)}
                    />
                  </div>
                );
              })}
            </div>
            <ul className={styles.drawer__total_price}>
              <li>
                <span>TOTAL:</span>
                <div></div>
                <b>
                  {countTotalPrice}
                  $.
                </b>
              </li>
              <li>
                <span>TAX 5%:</span>
                <div></div>
                <b>{(countTotalPrice * 0.05).toFixed(2)} руб. </b>
              </li>
            </ul>
            <button
              className={styles.drawer__button_submit}
              onClick={() => makeOrder(cartItems)}
            >
              confirm the order
              <img src="images/arrow.svg" alt="arrow" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
