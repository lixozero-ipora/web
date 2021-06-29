import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import {
	Nav,
	Logo,
	Hamburger,
	Menu,
	MenuLink,
	Search,
	ButtonCad,
} from './styles'
import logo from '../../assets/images/recycling.svg'

const NavBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<Nav>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<Logo>
					<img src={logo} alt="recilagem" />
					<div>
						<h1>LIXO ZERO</h1>
						<h3>IPORÁ-GO</h3>
					</div>
				</Logo>
			</Link>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
				<MenuLink to="">SOBRE</MenuLink>
				<MenuLink to="">POSTS</MenuLink>
				<MenuLink to="">CONTATOS</MenuLink>
				<Search>
					<input type="text" />
					<button type="submit">
						<FaSearch style={{ fontSize: 18 }} />
					</button>
				</Search>
				<ButtonCad>CADASTRE</ButtonCad>
			</Menu>
		</Nav>
	)
}

export default NavBar
