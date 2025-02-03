
import { NavLink } from "react-router-dom";

import { HeaderContainer } from "./styles";

import { MapPinLine, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo-coffe-delivery.svg";

export function Header() {
	return (
		<HeaderContainer>
			<a href="/">
				<img src={logo} alt="logo" />
			</a>
			<nav>
				<span>
					<MapPinLine size={24} weight="fill" />
					Porto Alegre, RS
				</span>
				<NavLink to="/checkout" title="Checkout">
					<ShoppingCart size={24} weight="fill" />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
