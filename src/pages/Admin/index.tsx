import React from 'react'
import { ButtonOutline } from '../../components/Common/styles'
import NavBar from '../../components/Navbar'
import { AdminContainer } from './styles'

const Admin: React.FC = () => (
	<>
		<NavBar />
		<AdminContainer>
			<ButtonOutline>Editar horários</ButtonOutline>
			<ButtonOutline>Visualizar denúncias</ButtonOutline>
		</AdminContainer>
	</>
)

export default Admin
