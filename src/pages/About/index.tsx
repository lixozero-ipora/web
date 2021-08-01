import React from 'react'
import { MdAccountBalance } from 'react-icons/md'

import {
	Image,
	BlurredImageContainer,
	ContentContainer,
	Title,
} from '../../components/Common/styles'
import NavBar from '../../components/Navbar'
import ifAndCityHall from '../../assets/images/if_and_city_hall.png'
import Footer from '../../components/Footer'
import useScrollTop from '../../hooks/useScrollTop'
import { AboutContent } from './styles'

const About: React.FC = () => {
	useScrollTop()

	return (
		<>
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
						O projeto visa enfrentar a situação atual da não-coleta dos resíduos
						em alguns bairros pelos coletores e caminhões e otimizar a política
						urbana em sua cobertura, casa a casa.
					</p>
					<p>
						O desenvolvimento do Software que fornece um meio digital para que
						sejam feitas reclamações a respeito de irregularidades na coleta de
						RSU da cidade, o que engloba também a disposição das datas para
						população, assim como, informação do descarte adequado pela
						orientação municipal.
					</p>
					<p>Os colaboradores envolvidos são:</p>
					<ul>
						<li>
							Luciana Recart Cardoso -{' '}
							<span className="magenta">
								Cientista da Computação e Prof. Me. do Insituto Federal Goiano -
								Campus Iporá
							</span>
						</li>
						<li>
							Viviane Specian -{' '}
							<span className="light-blue">
								Prof. Me, Bióloga e Vereadora da Prefeitura de Iporá
							</span>
						</li>
						<li>
							Marcelo Rodrigues Mendonça -{' '}
							<span className="light-blue">
								Geógrafo e Prof. Dr. do Instituto SocioAmbientais (IESA)
							</span>
						</li>
						<li>
							Guilherme E. S. Bueno -{' '}
							<span className="light-blue">
								Engenheiro Ambiental da Secretaria de Meio Ambiente de Iporá
							</span>
						</li>
						<li>
							Cleidney Silva -{' '}
							<span className="light-blue">
								Gerente da Limpeza Urbana da Secretaria de Obras de Iporá
							</span>
						</li>
						<li>
							Darlan J. A. da S. Brito -{' '}
							<span className="light-blue">
								Gerente dos Recursos Humanos da Secretaria de Obras de Iporá
							</span>
						</li>
						<li>
							Wayrone Klaiton Luiz Silva -{' '}
							<span className="green">Documentador e Gestor de qualidade</span>
						</li>
						<li>
							Gustavo Hiroaki Dos Santos Miwa -{' '}
							<span className="orange">Gerente de projeto</span>
						</li>
						<li>
							Abenaya Kelly Vieira Pires -{' '}
							<span className="wine">Produtora de Cards e de EAP</span>
						</li>
						<li>
							João Victor Azevedo -{' '}
							<span className="wine">
								Produtor de Cards e Gestor das partes interessadas
							</span>
						</li>
						<li>
							Pablo Almeida de Souza -{' '}
							<span className="purple">
								Produtor de enquetes e Gestor de riscos
							</span>
						</li>
						<li>
							Leonardo Rodrigues Silva -{' '}
							<span className="purple">
								Gestor das mídias sociais, Enquetes e Orçamento
							</span>
						</li>
						<li>
							João Pedro Barros Ferreira -{' '}
							<span className="water">
								Gestor do desenvolvimento e Desenvolvedor
							</span>
						</li>
						<li>
							Thiago César R. da Mata -{' '}
							<span className="water">Desenvolvedor</span>
						</li>
						<li>
							Higor Koakovsk Pereira - <span className="brown">Designer</span>
						</li>
					</ul>
				</AboutContent>
			</ContentContainer>
			<Footer />
		</>
	)
}

export default About
