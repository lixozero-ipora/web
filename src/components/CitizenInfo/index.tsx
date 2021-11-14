import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ComplaintRegistry } from '../../@types';
import { CitizenInfoComponent, SolvedButton } from './styles';

interface CitizenInfoProps extends ComplaintRegistry {
	index: number;
	color?: string;
	showButton?: boolean;
	buttonText?: string;
	buttonColor?: string;
	unsolve?: boolean;
	buttonOnClick?: (index: number, whatsapp: string, unsolve?: boolean) => void;
}

const CitizenInfo: React.FC<CitizenInfoProps> = ({
	index,
	color,
	name,
	neighborhood,
	adress,
	whatsapp,
	description,
	created_at,
	solved_at,
	showButton,
	buttonText,
	buttonColor,
	buttonOnClick,
	unsolve,
}) => {
	const handleClick = () => {
		if (buttonOnClick) {
			buttonOnClick(index, whatsapp, unsolve);
		}
	};

	return (
		<CitizenInfoComponent color={color}>
			<span className="info">
				<strong>Nome</strong>: {name}
			</span>
			<span className="info">
				<strong>Endereço</strong>: {`${neighborhood} - ${adress}`}
			</span>
			<span className="info">
				<strong>Whatsapp</strong>:{' '}
				{!unsolve ? (
					<a
						href={`https://wa.me/55${whatsapp}?${new URLSearchParams(
							`text=Olá, ${name}! Aqui quem fala é da prefeitura de Iporá. A sua reclamação no site Lixo Zero está sendo atendida, logo ela será concluída. Muito obrigado pela reclamação! A prefeitura de Iporá quer o melhor para os seus cidadãos.`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="whatsapp"
					>
						{whatsapp}
						<IoLogoWhatsapp size={22} color="var(--color-green)" />
					</a>
				) : (
					whatsapp
				)}
			</span>
			<span className="info">
				<strong>Descrição da ocorrência</strong>: {description}
			</span>
			<span className="info">
				<strong>Criação da ocorrência</strong>:{' '}
				{new Date(created_at).toLocaleDateString('pt-BR', {
					hour: '2-digit',
					minute: '2-digit',
				})}
			</span>
			{solved_at && (
				<span className="info">
					<strong>Solução da ocorrência</strong>:{' '}
					{new Date(solved_at).toLocaleDateString('pt-BR', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</span>
			)}
			{showButton && (
				<SolvedButton onClick={handleClick} color={buttonColor}>
					{buttonText}
				</SolvedButton>
			)}
		</CitizenInfoComponent>
	);
};
export default CitizenInfo;
