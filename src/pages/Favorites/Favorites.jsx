import React from "react";

import styles from "./Favorites.module.scss";

import Card from "../../components/Card/Card";
import SearchContext from "../../context";

const Favorites = () => {
  const {
    favoriteItems,
    removeSneakersFromFavorites,
    addSneakersToCart,
    addSneakersToFavorite,
  } = React.useContext(SearchContext);
  return (
    <section className={styles.favorites}>
      <div className="container favorites__container">
        <h1 className={styles.favorites__title}>your favorites</h1>
        <ul className={styles.favorites__list}>
          {favoriteItems.map((item, index) => {
            return (
              <Card
                {...item}
                key={`${item}__${index}`}
                addSneakersToCart={addSneakersToCart}
                addSneakersToFavorite={addSneakersToFavorite}
                sneakers={item}
                favorite={true}
                removeSneakersFromFavorites={removeSneakersFromFavorites}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Favorites;
