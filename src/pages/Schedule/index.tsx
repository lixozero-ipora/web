import React from 'react'
import { Link } from 'react-router-dom'

import {
	AuthorInfo,
	BlurredImage,
	BlurredImageContainer,
	ContentContainer,
	ContentText,
	InfoContainer,
	LastEdited,
	Title,
} from '../../components/Common/styles'
import NavBar from '../../components/Navbar'
import girlLikeImage from '../../assets/images/girl_like.png'
import Footer from '../../components/Footer'
import { ScheduleContainer } from './styles'
import useScrollTop from '../../hooks/useScrollTop'

const Schedule: React.FC = () => {
	useScrollTop()

	return (
		<>
			<NavBar />
			<BlurredImageContainer>
				<BlurredImage src={girlLikeImage} />
			</BlurredImageContainer>
			<ContentContainer>
				<Title>Horários</Title>
				<InfoContainer>
					<AuthorInfo>Nome do autor</AuthorInfo>
					<LastEdited>Última edição 19/07/2021</LastEdited>
				</InfoContainer>
				<ContentText>
					<p>
						Aqui estão dispostos os horários sobre a coleta nos bairros, e
						algumas informações de como são feitas essas coletas.
					</p>
					<p>
						Os caminhões de lixo fazem a coleta de uma maneira planejada,
						primeiro, pessoas catadoras coletam e armazenam estes lixos em um
						local estratégico, para que o aproveitamento na rota da coleta seja
						maior e, assim, seja possível coletar em mais bairros.
					</p>
					<p>
						Os horários da coleta de cada bairro serão exibidos aqui. Fique
						atento sobre a coleta em seu bairro e, caso não haja,{' '}
						<Link to="/denuncia">denuncie</Link>.
					</p>
					<p>
						Abaixo estão os bairros seguidos pelo horário definido para a
						coleta.
					</p>
				</ContentText>
				<ScheduleContainer>
					<p>
						Ariston Gomes <span className="green">21/07/2021</span> -
						<span className="red">25/07/2021</span>
					</p>
					<p>
						Bela Vista <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Central <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Centro <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Conjunto Águas Claras
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Conjunto Habitac Andorinhas
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Goiás <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Goiás II <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Arco Íris <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Arco-íris <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Monte Alto <span className="green">horário indefinido</span>{' '}
						-<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Novo Horizont III
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Novo Horizonte
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Novo Horizonte I
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Novo Horizonte II
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Oliveiras <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Jardim Urânio <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Joaquim Berto <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Loteamento Perne <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Loteamento São Paulo Cruz
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Mato Grosso <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Mato Grosso do Sul <span className="green">horário indefinido</span>
						- <span className="red">horário indefinido</span>
					</p>
					<p>
						Novo Horizonte <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Novo Ipor <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Padre Cícero <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Parque das Estrelas
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Parque Estrelas <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Pedro G Filho <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Perne <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Planalto <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Por do Sol <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Central <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor José <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Por do Sol <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Santo Antônio <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						São Francisco <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						São José <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						São Paulo da Cruz <span className="green">horário indefinido</span>{' '}
						-<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Aeroporto Sul
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Ariston Gomes
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Bela Vista <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Carajás <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Central <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor dos Funcionário
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor dos Funcionários Ii
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Estrela Norte
						<span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Funcionários <span className="green">horário indefinido</span>
						- <span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Leste <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Perme <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Por do Sol <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Por Sol <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Setor Rosa Ventos <span className="green">horário indefinido</span>{' '}
						-<span className="red">horário indefinido</span>
					</p>
					<p>
						Sítio Perme <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Sossego <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Umuarama <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Brasília <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Brasília 1 <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Cascalheira <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Ferreira <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Iporazinho <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Itajubá <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Itajubá I <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Itajubá II <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Monte Alto <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Moreira <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Mutirão <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Nova <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Padre Cícero <span className="green">horário indefinido</span>{' '}
						-<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Rica <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila Umuarama <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Vila União <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
					<p>
						Zona Rural <span className="green">horário indefinido</span> -
						<span className="red">horário indefinido</span>
					</p>
				</ScheduleContainer>
			</ContentContainer>
			<Footer />
		</>
	)
}

export default Schedule
