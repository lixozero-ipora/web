import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo, Hamburger, Menu, MenuLink } from './styles';
import logo from '../../assets/images/recycling.svg';
import { useAuth } from '../../store/authContext';

const NavBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { isLogedIn } = useAuth();
	return (
		<Nav data-aos="fade-down">
			<Link to="/">
				<Logo>
					<img src={logo} alt="recilagem" />
				</Logo>
			</Link>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
				{isLogedIn ? (
					<>
						<MenuLink to="/">Página inicial</MenuLink>
						<MenuLink to="/gerenciar-datas">Gerencie Datas de Coleta</MenuLink>
						<MenuLink to="/gerenciar-reclamacoes">
							Gerencie Reclamações
						</MenuLink>
					</>
				) : (
					<>
						<MenuLink to="/">Página inicial</MenuLink>
						<MenuLink to="/datas">Datas de coleta</MenuLink>
						<MenuLink to="/denuncia">Reclamar</MenuLink>
					</>
				)}
			</Menu>
		</Nav>
	);
};

export default NavBar;
