import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./ReduxStore/ToggleSlice";

export default function Header() {
  const myCart = useSelector((item) => item.cart.cart);
  const dispatch = useDispatch();

  const totalCart = myCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <nav className="navbar">
      <div className="logo">ReduxCart</div>
      <div className="cart">
        <Button btnclass="cart-button">
          <span className="cart-text" onClick={showCartHandler}>
            My Cart ( {totalCart} )
          </span>
        </Button>
      </div>
    </nav>
  );
}
