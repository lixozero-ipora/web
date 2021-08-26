import styled from 'styled-components'

export const FooterContainer = styled.footer`
	margin-top: 50px;
	width: 100%;
`

export const FooterText = styled.div`
	padding: 10px 35px;

	background-color: var(--color-green);
	color: #fff;
	font-size: 1.3rem;

	p > strong {
		padding: 0 5px;
		background-color: white;
		border-radius: 10px;
		color: var(--color-green);
	}

	.large {
		font-size: 1.7rem;
		margin-bottom: 10px;
	}
`

export const BottomMessage = styled.p`
	color: var(--color-text-dark);
	padding: 0 35px;

	a {
		color: var(--color-blue-light);
		font-weight: bold;
	}
`
