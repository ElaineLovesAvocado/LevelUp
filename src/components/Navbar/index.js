import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/records" activeStyle>
						Records
					</NavLink>
					<NavLink to="/profile" activeStyle>
						Ranking
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
