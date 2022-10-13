import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { useState } from "react";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCart = () => {
    cartIsShown ? setCartIsShown(false) : setCartIsShown(true);
  };

  return (
    <>
      {cartIsShown && <Cart onClick={toggleCart} />}
      <Header onShowCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
