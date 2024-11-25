import { MapPinLine, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-coffe-delivery.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <span>
          <MapPinLine size={24} />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
