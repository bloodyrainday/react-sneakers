import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Favorites from "./pages/Favorites/Favorites";
import Orders from "./pages/Orders/Orders";
import MainContent from "./pages/MainContent";
import SearchContext from "./context";

import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [sneakers, setSneakers] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const getSneakers = await axios
        .get("https://660a71f0ccda4cbc75dae25b.mockapi.io/sneakers")
        .then((res) => res.data);
      setIsLoading(false);

      setSneakers(getSneakers);
    }

    fetchData();
  }, []);

  const [openedCart, setOpenedCart] = React.useState(false);

  console.log("the drawer is opened", openedCart);
  const [orderedItems, setOrderedItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  // const [totalPrice, setTotalPrice] = React.useState(0);

  const countTotalPrice =
    cartItems.length > 0
      ? cartItems.reduce((acc, curr) => {
          acc += curr.price;
          return acc;
        }, 0)
      : 0;

  console.log("sneakers that i got", cartItems);
  const addSneakersToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  const removeSneakersFromCart = (removeItemId) => {
    setCartItems(cartItems.filter((item) => item.id !== removeItemId));
  };
  const addSneakersToFavorite = (obj) => {
    setFavoriteItems([...favoriteItems, obj]);
  };
  const removeSneakersFromFavorites = (removeItemId) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== removeItemId));
  };
  console.log("favorite", favoriteItems);
  const takeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue("");
  };

  return (
    <SearchContext.Provider
      value={{
        sneakers,
        searchValue,
        addSneakersToCart,
        addSneakersToFavorite,
        takeSearchValue,
        clearSearchInput,
        removeSneakersFromCart,
        cartItems,
        setCartItems,
        isLoading,
        favoriteItems,
        removeSneakersFromFavorites,
        orderedItems,
        setOrderedItems,
        countTotalPrice,
      }}
    >
      <div className="wrapper">
        <Drawer
          onCloseCart={() => setOpenedCart(false)}
          openedCart={openedCart}
        />

        <Header
          onClickCart={() => setOpenedCart(true)}
          orderedItems={orderedItems}
          countTotalPrice={countTotalPrice}
        />
        <Routes>
          <Route path="./react-sneakers" element={<MainContent />}></Route>
          <Route path="./fav" element={<Favorites />}></Route>
          <Route path="./orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
