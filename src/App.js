import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealsAvailable from "./components/Meals/MealsAvailable";
import { Colors } from "./utils/Colors";

function App() {
  return (
    <div style={{ backgroundColor: Colors.layoutGray, height: '100%', paddingBottom: 100 }}>
      <Header />
      <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
        <Summary />
        <MealsAvailable />
      </div>
    </div>
  );
}

export default App;
