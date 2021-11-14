import React from 'react';
import { MdAccountBalance } from 'react-icons/md';

import {
	Image,
	BlurredImageContainer,
	ContentContainer,
	Title,
} from '../../components/Common/styles';
import NavBar from '../../components/Navbar';
import ifAndCityHall from '../../assets/images/if_and_city_hall.png';
import Footer from '../../components/Footer';
import useScrollTop from '../../hooks/useScrollTop';
import { AboutContent, AboutContainer } from './styles';

const About: React.FC = () => {
	useScrollTop();

	return (
		<AboutContainer>
			<NavBar />
			<BlurredImageContainer>
				<Image src={ifAndCityHall} />
			</BlurredImageContainer>
			<ContentContainer>
				<Title>
					<span>
						<MdAccountBalance size={60} />
					</span>
					Sobre
				</Title>
				<AboutContent>
					<p>
						O projeto desenvolvido teve o objetivo de auxiliar a situação de
						não-coleta dos resíduos em alguns bairros de pequenas cidades. E com
						isso, otimizar a política urbana em sua cobertura da coleta de lixo,
						casa à casa.
					</p>
					<p>
						O presente Software fornece um espaço digital para que datas de
						coleta sejam visualizadas e reclamações a respeito de
						irregularidades na coleta de RSU de uma cidade também possam ser
						realizadas.
					</p>
					<p>
						Além do mais, neste sistema, é possível obter uma orientação
						municipal sobre a informação do descarte adequado na página inicial.
					</p>

					<p>Membros da equipe:</p>
					<ul>
						<li>
							Abenaya Kelly Vieira Pires -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							Gustavo Hiroaki Dos Santos Miwa -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							Higor Koakovsk Pereira -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							João Pedro Barros Ferreira -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							João Victor Azevedo -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							Leonardo Rodrigues Silva -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							Luciana Recart Cardoso - <span>Coordenadora do projeto</span>
						</li>
						<li>
							Pablo Almeida de Souza -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							Thiago César R. da Mata -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
						<li>
							Wayrone Klaiton Luiz Silva -{' '}
							<span>
								Acadêmico(a) do 5º período do curso de Tecnologia em Análise e
								Desenvolvimento de Sistemas
							</span>
						</li>
					</ul>
				</AboutContent>
			</ContentContainer>
			<Footer />
		</AboutContainer>
	);
};

export default About;
