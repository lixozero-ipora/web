import React from 'react'

import { BottomMessage, FooterContainer, FooterText } from './styles'

const Footer: React.FC = () => (
	<FooterContainer>
		<FooterText>
			<p>
				Projeto desenvolvido pelos acadêmicos do curso de Análise e
				Desenvolvimento de Sistemas do Instituto Federal Goiano - Campus Iporá
				em parceria com Prefeitura de Iporá, sob a supervisão da Prof. Me.
				Luciana Recart Cardoso
			</p>
			<p>
				Este é um projeto de código fonte aberto, para visualizar ou até mesmo
				contribuir com o projeto acesse este{' '}
				<a
					href="https://github.com/lixozero-ipora/web"
					target="_blank"
					rel="noopener noreferrer"
				>
					link
				</a>
				.
			</p>
			<p>
				Todos os ícones utilizados não foram modificados.{' '}
				<a
					href="https://fontawesome.com/license"
					target="_blank"
					rel="noopener noreferrer"
				>
					Icones utilizados
				</a>
			</p>
		</FooterText>
		<BottomMessage>
			Desenvolvido por{' '}
			<a
				href="https://www.ifgoiano.edu.br/home/index.php/cursos-superiores-ipora/221-analise-e-desenvolvimento-de-sistemas.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				TADS{' '}
			</a>
			&copy; 2021
		</BottomMessage>
	</FooterContainer>
)

export default Footer
