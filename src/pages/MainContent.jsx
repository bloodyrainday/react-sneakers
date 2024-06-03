import React from "react";

import Card from "../components/Card/Card";
import Skeleton from "../components/Skeleton";
import SearchContext from "../context";

const MainContent = () => {
  const {
    sneakers,
    searchValue,
    addSneakersToCart,
    addSneakersToFavorite,
    takeSearchValue,
    clearSearchInput,
    removeSneakersFromCart,
    removeSneakersFromFavorites,
    isLoading,
  } = React.useContext(SearchContext);

  return (
    <section className="content">
      <div className="container content__container">
        <div className="content__top-wrapper">
          <h1 className="content__title">
            {searchValue ? `Looking for ${searchValue}` : "All sneakers"}
          </h1>

          <div className="content__search">
            <img
              className="content__icon"
              src="images/search-icon.svg"
              alt="search"
            />
            <input
              className="content__input"
              placeholder="search..."
              onChange={takeSearchValue}
              value={searchValue}
            ></input>
            {searchValue && <span onClick={clearSearchInput}>X</span>}
          </div>
        </div>

        <div className="content__sneakers-list">
          {isLoading
            ? Array(8).fill(<Skeleton />)
            : sneakers
                .filter((item) =>
                  item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <Card
                      {...item}
                      key={`${item}__${index}`}
                      addSneakersToCart={addSneakersToCart}
                      addSneakersToFavorite={addSneakersToFavorite}
                      sneakers={item}
                      removeSneakersFromCart={removeSneakersFromCart}
                      removeSneakersFromFavorites={removeSneakersFromFavorites}
                    />
                  );
                })}
        </div>
      </div>
    </section>
  );
};

export default MainContent;
