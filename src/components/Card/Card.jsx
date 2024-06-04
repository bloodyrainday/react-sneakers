import React from "react";

import styles from "./Card.module.scss";

import SearchContext from "../../context";

const Card = ({
  id,
  title,
  price,
  img,
  sneakers,
  addSneakersToCart,
  addSneakersToFavorite,
  favorite = false,
  removeSneakersFromFavorites,
  removeSneakersFromCart,
}) => {
  const { cartItems, favoriteItems } = React.useContext(SearchContext);
  const [addToCart, setAddToCart] = React.useState(false);
  const [addToFavorite, setAddToFavorite] = React.useState(false);
  // console.log('items', sneakers)

  const onClickAddButton = () => {
    setAddToCart(!addToCart);
  };

  const onClickFavoriteButton = () => {
    setAddToFavorite(!addToFavorite);
  };
  return (
    <div className={`content__sneakers-card ${styles.card}`}>
      {addSneakersToFavorite && (
        <img
          className={`${styles.card__icon}`}
          src={`require(${
            favoriteItems.some((item) => item.id === id)
              ? "./images/fav-icon-clicked.svg"
              : "./images/fav-icon.svg"
          })`}
          alt="fav-icon"
          onClick={() => {
            if (favoriteItems.find((item) => item.id === id)) {
              removeSneakersFromFavorites(id);
              onClickFavoriteButton();
            } else {
              onClickFavoriteButton();
              addSneakersToFavorite(sneakers);
            }
          }}
        />
      )}

      <img
        className={styles.card__img}
        src={`require(${img})`}
        alt="sneakers"
      />
      <h4>{title}</h4>
      <div className={styles.card__desc}>
        <div>
          <p>price:</p>
          <span>
            <strong>{price} $.</strong>
          </span>
        </div>
        {addSneakersToCart && (
          <img
            className={styles.card__btn}
            src={
              cartItems.some((item) => item.id === id)
                ? `images/add-btn-clicked.svg`
                : `images/add-btn.svg`
            }
            alt="add-btn"
            onClick={() => {
              if (cartItems.find((item) => item.id === id)) {
                removeSneakersFromCart(id);
                onClickAddButton();
              } else {
                onClickAddButton();
                addSneakersToCart(sneakers);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
