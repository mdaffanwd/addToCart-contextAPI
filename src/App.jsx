import "./App.css";
import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Item name="Macbook" price={Number("100000")} />
      <Item name="Pendrive" price={Number("1000")} />
      <Item name="Mobile" price={Number("10000")} />

      <Cart />
    </div>
  );
}

export default App;
