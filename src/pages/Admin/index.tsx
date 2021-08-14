import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedInputText from '../../components/AnimatedInputText'
import { ButtonOutline } from '../../components/Common/styles'
import Loading from '../../components/Loading'
import NavBar from '../../components/Navbar'
import { useAuth } from '../../store/authContext'
import { AdminContainer } from './styles'

const Admin: React.FC = () => {
	const { isLogedIn, handleLogin } = useAuth()
	const [loading, setLoading] = useState(false)
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		setLoading(true)

		handleLogin(name, password, () => {
			setLoading(false)
		})
	}

	const handleChangeName = (input: string) => {
		setName(input)
	}
	const handleChangeEmail = (input: string) => {
		setPassword(input)
	}

	return (
		<>
			<NavBar />
			<AdminContainer>
				{loading && <Loading />}
				{isLogedIn ? (
					<>
						<ButtonOutline>
							<Link to="/editar-horarios">Editar horários</Link>
						</ButtonOutline>
						<ButtonOutline>
							<Link to="/visualizar-reclamacoes">Visualizar reclamações</Link>
						</ButtonOutline>
					</>
				) : (
					<>
						{!loading && (
							<form onSubmit={handleSubmit}>
								<AnimatedInputText
									label="Usuário"
									value={name}
									onChange={handleChangeName}
								/>
								<AnimatedInputText
									label="Senha"
									type="password"
									value={password}
									onChange={handleChangeEmail}
								/>
								<ButtonOutline type="submit">Enviar</ButtonOutline>
							</form>
						)}
					</>
				)}
			</AdminContainer>
		</>
	)
}

export default Admin
