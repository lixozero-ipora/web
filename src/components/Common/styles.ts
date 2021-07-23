import styled from 'styled-components'

export const Container = styled.div`
	padding: 20px 30px;
`

export const ButtonOutline = styled.button`
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

export const BlurredImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(5px);
	z-index: -5;
`

export const Title = styled.h1`
	font-size: 6rem;
	text-align: center;
	color: var(--color-text-dark);
`

export const AuthorInfo = styled.strong`
	font-size: 1.2rem;
`

export const LastEdited = styled.span`
	font-size: 1.2rem;
`

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

export const ContentContainer = styled.div`
	width: 50%;
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
		margin: 20px 0;
	}
`
