import {useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealsAvailable from "./components/Meals/MealsAvailable";
import { Colors } from "./utils/Colors";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartView, setCartView] = useState(false);
  const toggleCartView = () => {
    setCartView(cartView ? false : true);
  }

  return (
    <CartProvider>
      <div style={{ backgroundColor: Colors.layoutGray, height: '100%', paddingBottom: 100 }}>
        <Cart showCart={cartView} onClose={toggleCartView} />
        <Header cartViewButtonFunc={toggleCartView} />
        <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
          <Summary />
          <MealsAvailable />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
