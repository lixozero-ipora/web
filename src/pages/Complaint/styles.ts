import styled, { css } from 'styled-components'
import { CardWithBrandThreeTexts } from '../../components/Common/styles'

interface ComplaintButtonProps {
	isValid?: boolean
}

interface ToBlurProps {
	isBlurred: boolean
}

export const ComplaintStep = styled(CardWithBrandThreeTexts)``

export const ComplaintMapContainer = styled.div`
	width: 100%;

	border: 1px solid var(--color-green);
	border-radius: 10px;

	overflow: hidden;
	margin-top: 27px;
`

export const ComplaintContentContainer = styled.div`
	width: 70%;
	margin: 30px auto;
	position: relative;

	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	padding: 20px;

	> p {
		width: 80%;
		margin: 15px auto;
	}

	> strong {
		display: block;
		text-align: center;
	}

	form {
		margin-bottom: 20px;
	}

	@media (max-width: 768px) {
		width: 90%;

		> p {
			width: 100%;
		}
	}
`

export const LoadingBoxContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	margin: 0 auto;

	z-index: 1001;

	> .box {
		width: 80%;
		background-color: white;
		border-radius: 10px;
	}
`

export const ToBlur = styled.div<ToBlurProps>`
	transition: all ease 500ms;
	${(props) => {
		if (props.isBlurred) {
			return css`
				filter: blur(9px);
				pointer-events: none;
			`
		}

		return css``
	}}
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
