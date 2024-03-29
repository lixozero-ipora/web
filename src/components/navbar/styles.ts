import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #fff;
	transition: all 0.3s ease-in;
	font-size: 1.6rem;
	font-weight: bold;
	margin-left: 5px;

	transition: all 300ms ease;
	border: 1px solid transparent;
	border-radius: 10px;

	:hover {
		/* text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); */
		border: 1px solid white;
		border-radius: 20px;
	}
`;

export const Nav = styled.div`
	height: 90px;
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: var(--color-green);
	z-index: 2;
`;

export const Logo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	img {
		height: 90px;
		margin-right: 10px;
	}
`;

export const Menu = styled.div<{ isOpen: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background: var(--color-green);
	z-index: 1;

	@media (max-width: 992px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		transition: max-height 0.5s ease-in;
		border-bottom-right-radius: 20px;
		border-bottom-left-radius: 20px;
		width: 100%;
	}
`;

export const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	z-index: 2;

	span {
		height: 2px;
		width: 25px;
		background: #fff;
		margin-bottom: 4px;
		border-radius: 5px;
	}

	@media (max-width: 992px) {
		display: flex;
	}
`;

export const Search = styled.div`
	display: flex;
	flex-direction: row;
	border: solid #000 1px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;

	input {
		padding: 0 16px;
		border: none;
		border-bottom-left-radius: 5px;
		border-top-left-radius: 5px;
		height: 50px;
		width: 250px;
	}

	button {
		width: 50px;
		height: 50px;
		border: none;
		border-bottom-right-radius: 5px;
		border-top-right-radius: 5px;
		background-color: #fff;
	}
	@media screen and (max-width: 1085px) {
		display: none;
	}
`;

export const ButtonCad = styled.button`
	border-style: none;
	border-radius: 5px;
	width: 150px;
	height: 50px;

	margin: 0px 15px;

	@media screen and (max-width: 768px) {
		width: 100%;
		background-color: transparent;
		color: #fff;
		font-weight: bold;
	}
`;
