import React from 'react';

import { BottomMessage, FooterContainer, FooterText } from './styles';

const Footer: React.FC = () => (
	<FooterContainer>
		<FooterText>
			<p>
				Este App Web foi desenvolvido pelos acadêmicos do curso de{' '}
				<strong>
					Análise e Desenvolvimento de Sistemas do Instituto Federal Goiano -
					Campus Iporá
				</strong>
				, sob a supervisão da Prof. Me. Luciana Recart Cardoso.
			</p>
			<p>
				Todos os ícones utilizados não foram modificados{' '}
				<a
					href="https://fontawesome.com/license"
					target="_blank"
					rel="noopener noreferrer"
				>
					(Icones utilizados)
				</a>
				.
			</p>
			<p>
				Algumas ilustrações utilizadas foram baseadas ou são do projeto
				Open-Source{' '}
				<a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">
					Undraw
				</a>
				.
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
);

export default Footer;
