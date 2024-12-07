import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, decrementCart } from "./ReduxStore/CartSlice";
export default function CartItems() {
  const cart = useSelector((item) => item.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(incrementCart(product));
    console.log("New");
  };
  const handleDecrement = (product) => {
    dispatch(decrementCart(product));
  };
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} class="item">
          <div class="name">{item.title}</div>
          <div class="quantity">Quantity : {item.quantity}</div>
          <div class="price">${item.quantity * item.price}.00</div>
          <span class="price-detail">(${item.price}/item)</span>
          <div class="buttons">
            <Button btnclass="button" onClick={() => handleDecrement(item)}>
              -
            </Button>
            <Button btnclass="button" onClick={() => handleIncrement(item)}>
              +
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
