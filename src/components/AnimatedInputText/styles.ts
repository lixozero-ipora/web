import styled, { css } from 'styled-components';

interface LabelTextProps {
	active: boolean;
	color: string;
}

interface InputElementProps {
	borderColor: string;
}

export const InputContainer = styled.label`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-top: 27px;
`;

export const LabelText = styled.span<LabelTextProps>`
	position: absolute;
	left: 8px;
	padding: 0 2px;
	color: var(--color-text-dark);
	transition: all 300ms ease;
	cursor: auto;

	${(props) => {
		if (props.active) {
			return css`
				color: ${props.color};
				top: -23px;
			`;
		}
		return css`
			top: 5px;
		`;
	}}
`;

export const InputElement = styled.input<InputElementProps>`
	padding: 7px 10px;
	width: 100%;
	min-width: 120px;

	border-radius: 10px;
	border: 1px solid ${(props) => props.borderColor};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;
