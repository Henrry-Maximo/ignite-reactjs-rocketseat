
import { NavLink } from "react-router-dom";

import { HeaderContainer, NumberCarrer } from "./styles";

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
					<NumberCarrer>
						3
					</NumberCarrer>
					<ShoppingCart size={24} weight="fill" />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
