import { CartIcon, Testing } from "../icons";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  const amount = cart.amount;
  console.log(cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <Testing />
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
