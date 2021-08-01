import styled from 'styled-components'

interface ButtonOutlineProps {
	theme?: string
}

export const Container = styled.div`
	padding: 20px 30px;
`

export const ButtonOutline = styled.button<ButtonOutlineProps>`
	border: 2px solid var(--color-green);
	background-color: transparent;
	color: var(--color-green);
	padding: 5px 15px;
	border-radius: 5px;
	transition: all ease 500ms;
	font-size: 2rem;

	:hover {
		transform: translateY(-3px);
		background-color: var(--color-green);
		color: #fff;
	}

	@media (max-width: 992px) {
		display: block;
		width: 100%;
	}
`

export const BlurredImageContainer = styled.div`
	height: 50vh;
	overflow: hidden;

	@media (max-width: 768px) {
		height: 30vh;
	}
`

export const Image = styled.img`
	margin: 20px 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	z-index: -5;
`

export const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 6rem;
	text-align: center;
	color: var(--color-text-dark);

	span {
		margin-right: 10px;
		display: flex;
	}
`

export const AuthorInfo = styled.strong`
	font-size: 1.6rem;
`

export const LastEdited = styled.span`
	font-size: 1.6rem;
`

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

export const ContentContainer = styled.div`
	width: 70%;
	margin: 0 auto;
	color: var(--color-text-dark);

	@media (max-width: 768px) {
		width: 90%;
	}
`

export const ContentText = styled.div`
	margin-top: 3rem;
	p {
		margin: 10px 0;
	}
	ul {
		width: 90%;
		margin: 20px 0;
		li {
			text-align: justify;
			margin-left: 20px;
		}
	}
`

export const CardWithBrandThreeTexts = styled.div`
	display: flex;
	background-color: var(--color-blue-opaque);
	color: white;
	border-radius: 10px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

	p:nth-child(1) {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px 0;

		svg {
			margin-right: 10px;
		}
	}
	p:nth-child(2) {
		padding: 0 10px;
		width: 80%;
		display: flex;
		align-items: center;
	}

	@media (max-width: 992px) {
		flex-direction: column;
		p:nth-child(1) {
			width: 100%;
		}
		p:nth-child(2) {
			width: 100%;
		}
	}
`
