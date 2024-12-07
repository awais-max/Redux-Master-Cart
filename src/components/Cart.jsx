import CartItems from "./CartItems";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((item) => item.cart.cart);
  return (
    <div class="container">
      <div class="title">Your Shopping Cart</div>
      <div className="Cart-list">
        <CartItems />
      </div>
    </div>
  );
}
