import styled, { css } from 'styled-components'

interface ComplaintButtonProps {
	isValid?: boolean
}

export const ComplaintMapContainer = styled.div`
	width: 100%;

	border: 1px solid var(--color-green);
	border-radius: 10px;

	overflow: hidden;
`

export const ComplaintContentContainer = styled.div`
	width: 60%;
	margin: 30px auto;

	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	padding: 20px;

	p {
		width: 80%;
		margin: 15px auto;
	}

	strong {
		display: block;
		text-align: center;
	}

	@media (max-width: 768px) {
		width: 90%;

		p {
			width: 100%;
		}
	}
`

export const ComplaintButton = styled.button<ComplaintButtonProps>`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	font-size: 2rem;
	padding: 10px 0;
	border-radius: 10px;
	margin-top: 10px;
	transition: all 500ms ease;

	${(props) => {
		if (props.isValid) {
			return css`
				background-color: var(--color-green);
				color: #fff;
			`
		}
		return css`
			background-color: #909090;
			color: var(--color-text-dark);
		`
	}}
`
