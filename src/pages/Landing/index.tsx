import React from 'react'
import { useHistory } from 'react-router-dom'

import mainCarouselImage from '../../assets/images/carrousel_main.png'
import girlLikeImage from '../../assets/images/girl_like.png'
import ecoSimbolImage from '../../assets/images/eco_simbol.png'
import ifgoianoIporaImage from '../../assets/images/ifgoiano_ipora.jpg'
import NavBar from '../../components/Navbar'
import Post from '../../components/Post'

import {
	ImageContainer,
	LandingImage,
	ContentContainer,
	LadingContainer,
} from './styles'
import Footer from '../../components/Footer'
import useScrollTop from '../../hooks/useScrollTop'

const Landing: React.FC = () => {
	useScrollTop()
	const { push } = useHistory()

	const handleRedirectSchedule = () => {
		push('/horarios')
	}

	const handleRedirectComplaint = () => {
		push('/denuncia')
	}
	const handleRedirectReadMore = () => {
		push('/sobre')
	}

	return (
		<>
			<NavBar />
			<LadingContainer>
				<ImageContainer>
					<LandingImage src={mainCarouselImage} alt="Lixo zero Iporá" />
				</ImageContainer>
				<ContentContainer>
					<Post
						title="Horários"
						text="Aqui você pode visualizar os horários da coleta pelos caminhões de lixo em cada bairro, isso somente é possível por conta da ação da prefeitura em editar estes horários de acordo com o cronograma pré definido."
						image={girlLikeImage}
						showReadMore
						onReadMore={handleRedirectSchedule}
					/>
					<Post
						title="Denúncia"
						text="Não é algo usual, porém, pode ocorrer de lixos não serem coletados na data definida. Para isso basta fazer uma denúncia no ponto que não foi coletado. Esse feedback é muito importante para um Iporá melhor!"
						image={ecoSimbolImage}
						showReadMore
						onReadMore={handleRedirectComplaint}
					/>
					<Post
						title="Sobre"
						text="Este é um projeto criado durante um período do curso de Análise e Desenvolvimento de Sistemas no Instituto Federal Goiano Campus Iporá. Para ver mais sobre o projeto basta clicar no botão abaixo"
						image={ifgoianoIporaImage}
						showReadMore
						onReadMore={handleRedirectReadMore}
					/>
				</ContentContainer>
			</LadingContainer>
			<Footer />
		</>
	)
}

export default Landing
