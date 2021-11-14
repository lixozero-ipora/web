import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdAccountBalance, MdDateRange, MdHearing } from 'react-icons/md';
import Slider from 'react-slick';

import carouselImageOne from '../../assets/images/carousel_1.svg';
import carouselImageTwo from '../../assets/images/carousel_2.svg';
import carouselImageThree from '../../assets/images/carousel_3.png';
import scheduleDateSVG from '../../assets/images/schedule_date.svg';
import complainSVG from '../../assets/images/complaint.svg';
import ifGoianoAndCityMallSVG from '../../assets/images/if_and_city_hall.png';
import NavBar from '../../components/Navbar';
import Post from '../../components/Post';

import {
	ImageContainer,
	LandingImage,
	ContentContainer,
	LadingContainer,
	SliderContainer,
} from './styles';
import Footer from '../../components/Footer';
import useScrollTop from '../../hooks/useScrollTop';

const imagesArr = [
	{ path: carouselImageOne },
	{ path: carouselImageTwo },
	{ path: carouselImageThree, whiteBg: true },
];

const Landing: React.FC = () => {
	useScrollTop();
	const { push } = useHistory();

	const handleRedirectSchedule = () => {
		push('/datas');
	};

	const handleRedirectComplaint = () => {
		push('/denuncia');
	};
	const handleRedirectReadMore = () => {
		push('/sobre');
	};

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
						text="Visualize as datas de coleta urbana por bairro de sua cidade. Sua prefeitura deve dispor de datas semanais ou mensais, definidas por um cronograma aprovado a ser executado pelo caminhão de lixo, bairro a bairro. Clique no botão para ver estas datas."
						image={scheduleDateSVG}
						showReadMore
						onReadMore={handleRedirectSchedule}
					/>
					<Post
						title="Reclame aqui"
						titleIcon={<MdHearing size={40} />}
						text="Reclame aqui se o seu lixo não foi coletado na data pré-definida por sua prefeitura. A sua reclamação é importante para manter sua cidade limpa, organizada e saudável! Basta clicar neste botão para realizar sua reclamação."
						image={complainSVG}
						showReadMore
						onReadMore={handleRedirectComplaint}
					/>
					<Post
						title="Sobre"
						titleIcon={<MdAccountBalance size={40} />}
						text="Este App Web foi implementado na disciplina “Gerência de Projetos da Sistemas” no curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS), do Instituto Federal Goiano – Campi Iporá pelos acadêmicos do 5º Período, sob coordenação da Professora EBTT Luciana Recart Cardoso. O produto foi desenvolvido no primeiro semestre de 2021, durante a pandemia COVID-19 no projeto “Lixo Zero Iporá”. Clique no botão para ver mais detalhes."
						image={ifGoianoAndCityMallSVG}
						showReadMore
						onReadMore={handleRedirectReadMore}
					/>
				</ContentContainer>
			</LadingContainer>
			<Footer />
		</>
	);
};

export default Landing;
