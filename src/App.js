import "./App.css";
import CartDetails from "./components/CartDetails";
import Products from "./components/Products";

function App() {
    return (
        <div className="App">
            <Products></Products>
            <CartDetails></CartDetails>
        </div>
    );
}

export default App;
