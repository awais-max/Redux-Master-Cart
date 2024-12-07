import Header from "./components/Header";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { useSelector } from "react-redux";
function App() {
  const showCart = useSelector((state) => state.toggleCart.cartIsVisible);
  return (
    <>
      <Header />
      {showCart && <Cart />}
      <Product />
    </>
  );
}

export default App;
