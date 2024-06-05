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
    <section
      className={styles.favorites}
      style={{ height: `${favoriteItems.length !== 0 ? "100%" : "100vh"}` }}
    >
      <div className="container favorites__container">
        <h1 className={styles.favorites__title}>your favorites</h1>
        <ul className={styles.favorites__list}>
          {favoriteItems.length !== 0 ? (
            favoriteItems.map((item, index) => {
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

export default Favorites;
