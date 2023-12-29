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
					<NavLink to="/ranking" activeStyle>
						Ranking
					</NavLink>
					<NavLink to="/seasonRanking" activeStyle>
						Season
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
