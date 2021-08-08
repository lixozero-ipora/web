import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdAccountBalance, MdDateRange, MdHearing } from 'react-icons/md'
import Slider from 'react-slick'

import carouselImageOne from '../../assets/images/carousel_1.svg'
import carouselImageTwo from '../../assets/images/carousel_2.svg'
import carouselImageThree from '../../assets/images/carousel_3.png'
import scheduleDateSVG from '../../assets/images/schedule_date.svg'
import complainSVG from '../../assets/images/complaint.svg'
import ifGoianoAndCityMallSVG from '../../assets/images/if_and_city_hall.png'
import NavBar from '../../components/Navbar'
import Post from '../../components/Post'

import {
	ImageContainer,
	LandingImage,
	ContentContainer,
	LadingContainer,
	SliderContainer,
} from './styles'
import Footer from '../../components/Footer'
import useScrollTop from '../../hooks/useScrollTop'

const imagesArr = [
	{ path: carouselImageOne },
	{ path: carouselImageTwo },
	{ path: carouselImageThree, whiteBg: true },
]

const Landing: React.FC = () => {
	useScrollTop()
	const { push } = useHistory()

	const handleRedirectSchedule = () => {
		push('/datas')
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
				<SliderContainer>
					<Slider
						autoplay
						autoplaySpeed={9000}
						dots
						infinite
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
					>
						{imagesArr.map((imgData) => (
							<ImageContainer key={imgData.path} whiteBg={!!imgData.whiteBg}>
								<LandingImage src={imgData.path} alt="Lixo zero Iporá" />
							</ImageContainer>
						))}
					</Slider>
				</SliderContainer>
				<ContentContainer>
					<Post
						preventAnimation
						title="Veja as datas da coleta"
						titleIcon={<MdDateRange size={40} />}
						text="Aqui você pode visualizar os datas de coleta em cada bairro. A Secretaria de Obras da Prefeitura de Iporá dispõe de datas organizadas, definindo o cronograma para ação da coleta urbana em Iporá."
						image={scheduleDateSVG}
						showReadMore
						onReadMore={handleRedirectSchedule}
					/>
					<Post
						title="Reclame aqui"
						titleIcon={<MdHearing size={40} />}
						text="Em nosso município, há lixos que não são coletados na data definida ou não são dispostos pelos moradores. Nesse caso, faça uma reclamação para o lixo ser recolhido, informando o ponto da não-coleta, nome, endereço, Whatsapp e descrição. O seu feedback é muito importante para uma Iporá mais limpa, organizada e saudável!"
						image={complainSVG}
						showReadMore
						onReadMore={handleRedirectComplaint}
					/>
					<Post
						title="Sobre"
						titleIcon={<MdAccountBalance size={40} />}
						text="Este é um projeto criado durante um período do curso de Análise e Desenvolvimento de Sistemas no Instituto Federal Goiano Campus Iporá. Para ver mais sobre o projeto basta clicar no botão abaixo"
						image={ifGoianoAndCityMallSVG}
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
