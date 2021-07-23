import React from 'react'

import {
	BlurredImage,
	BlurredImageContainer,
	ContentContainer,
	ContentText,
	Title,
} from '../../components/Common/styles'
import NavBar from '../../components/Navbar'
import ifgoianoImage from '../../assets/images/ifgoiano_ipora.jpg'
import Footer from '../../components/Footer'
import useScrollTop from '../../hooks/useScrollTop'

const About: React.FC = () => {
	useScrollTop()

	return (
		<>
			<NavBar />
			<BlurredImageContainer>
				<BlurredImage src={ifgoianoImage} />
			</BlurredImageContainer>
			<ContentContainer>
				<Title>Sobre</Title>
				<ContentText>
					<p>
						A motivação e justificativa do projeto surgiu pela participação de
						uma audiência pública destinada a discutir o lixo produzido na
						cidade de Iporá. No vídeo de Viviane Specian intitulado “destino
						final para o lixo produzido em Iporá-GO: Problemas e Soluções”, a
						bióloga e vereadora Viviane Specian de Iporá afirma que a cidade
						carece de iniciativas acadêmicas e voluntárias de educadores e
						profissionais afins para atingir a conscientização ambiental da
						população que se inicie no descarte adequado e seletivo.
					</p>
					<p>
						Participando da audiência pública, o ex-Vereador e ex-Secretário do
						Meio Ambiente de Catalão/GO, o Geógrafo e Prof. Marcelo Rodrigues
						Mendonça do Instituto de Estudos Socioambientais do IESA, da
						Universidade Federal de Goiás-UFG concorda com a fala da Viviane, e
						ainda, em resposta a perguntas, comenta sobre a criação de
						tecnologias da informação com foco em RSU, como aplicativos e sites
						para contribuir, a todo o processo de manejo e gestão. No caso,
						frisa a importância de aplicações voltadas a informação de datas ou
						de pontos de coleta para o cidadão.
					</p>
					<p>
						Visando enfrentar a situação atual, o projeto se justifica e deve
						ser desenvolvido para atender duas frentes de ação:
					</p>
					<ul>
						<li>
							A gestão de Mídias sociais (Instagram e Facebook) que por meio da
							educação ambiental estimule a própria conscientização dos
							Iporaenses.
						</li>
						<li>
							O desenvolvimento do Software que fornece um meio digital para que
							sejam feitas denúncias a respeito de irregularidades na coleta de
							RSU da cidade, o que engloba também a disposição das datas para
							população.
						</li>
					</ul>
				</ContentText>
			</ContentContainer>
			<Footer />
		</>
	)
}

export default About
