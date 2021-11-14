import styled from 'styled-components';

export const SugestionOrProblemsButton = styled.a`
	height: 90px;
	width: 90px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	color: white;

	font-size: 1.3rem;
	font-weight: bold;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: pointer;

	background-color: var(--color-green);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
	border-radius: 100%;

	transition: all ease 500ms;

	:hover {
		height: 100px;
		width: 100px;

		bottom: 15px;
	}
`;
