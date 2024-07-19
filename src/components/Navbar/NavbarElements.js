// Filename - ./components/Navbar.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	max-width: 960px;
	mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%);
	margin: 0 auto;
	padding: 20px 0;
	height: 0px;
`;

export const NavLink = styled(Link)`
	text-align: center;
	background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);

	&.active {
		padding: 15px;
		font-family: "Caveat", cursive;
		text-transform:uppercase;
		color: rgba(0, 35, 122, 0.5);
		font-size: 15px;
		text-decoration: none;
		display: block;
	}

	font-size: 18px;
	text-decoration: none;
`;

export const Bars = styled(FaBars)`
	display: flex;
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
