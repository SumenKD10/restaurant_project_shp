import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealsAvailable from "./components/Meals/MealsAvailable";
import { Colors } from "./utils/Colors";

function App() {
  const [cartView, setCartView] = useState(false);
  const toggleCartView = () => {
    setCartView(cartView ? false : true);
  }

  return (
    <Fragment>
      <div style={{ backgroundColor: Colors.layoutGray, height: '100%', paddingBottom: 100 }}>
        <Cart showCart={cartView}/>
        <Header cartViewButtonFunc={toggleCartView} />
        <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
          <Summary />
          <MealsAvailable />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
