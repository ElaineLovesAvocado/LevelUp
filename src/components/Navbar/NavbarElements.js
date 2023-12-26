// Filename - ./components/Navbar.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #cce3de;
	height: 85px;
	display: flex;
	justify-content: center;
	padding: 10px;
`;

export const NavLink = styled(Link)`
	color: #6c584c;
	display: flex;
	font-family: Verdana, sans-serif;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #6b9080;
	}
`;

export const Bars = styled(FaBars)`
	display: flex;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
