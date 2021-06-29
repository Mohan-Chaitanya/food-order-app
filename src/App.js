import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { Fragment, useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const showCartHandler = () => {
    setCartDisplay(true);
  };

  const hideCartHandler = () => {
    setCartDisplay(false);
  };

  return (
    <CartProvider>
      {cartDisplay && <Cart closeCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
