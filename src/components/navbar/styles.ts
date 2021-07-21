import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link)`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #fff;
	transition: all 0.3s ease-in;
	font-size: 0.9rem;
	font-weight: bold;
`

export const Nav = styled.div`
	height: 90px;
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: var(--color-green);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
`

export const Logo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	div {
		align-items: flex-start;
		justify-content: center;
		height: 90px;
		display: flex;
		flex-direction: column;
		h1 {
			font-weight: bold;
			font-size: 1.3rem;
			color: #fff;
		}

		h3 {
			font-weight: 300;
			font-size: 1rem;
			color: #fff;
		}
	}

	img {
		width: 45px;
		height: 45px;
		margin-right: 10px;
		filter: grayscale(100%) invert(100%);
	}
`

export const Menu = styled.div<{ isOpen: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background: var(--color-green);

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		transition: max-height 0.3s ease-in;
		width: 100%;
	}
`

export const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	span {
		height: 2px;
		width: 25px;
		background: #fff;
		margin-bottom: 4px;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		display: flex;
	}
`

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
`

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
`
