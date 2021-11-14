import styled from 'styled-components';

export const CitizenInfoComponent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	background-color: white;
	width: 100%;

	border-top: 1px solid ${(props) => props.color};
	border-bottom: 1px solid ${(props) => props.color};
	border-right: 1px solid ${(props) => props.color};
	padding: 5px;

	span.info {
		margin-top: 5px;
		padding: 5px;
		background-color: white;

		.whatsapp {
			svg {
				margin-left: 5px;
			}
		}

		strong {
			color: ${(props) => props.color};
		}
	}
`;

export const SolvedButton = styled.button`
	display: block;
	width: 100%;
	padding: 10px 0;
	background: transparent;
	border: 1px solid ${(props) => props.color};
	border-radius: 10px;
	transition: ease 500ms;

	:hover {
		color: white;
		background-color: ${(props) => props.color};
	}
`;
