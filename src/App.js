import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";

function App() {
  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <Header />
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <Summary />
      </div>
    </div>
  );
}

export default App;
