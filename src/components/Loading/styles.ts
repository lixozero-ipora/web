import styled, { keyframes } from 'styled-components'

export const LoadingContainer = styled.div`
	width: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const LoadingMessage = styled.span`
	color: var(--color-green);
	font-size: 1.4rem;
	margin-right: 15px;
`

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingElement = styled.span`
	width: 30px;
	height: 30px;

	border-radius: 100%;
	border-width: 3px;
	border-style: solid;
	border-top-color: var(--color-green);
	border-bottom-color: var(--color-green);
	border-right-color: transparent;
	border-left-color: transparent;

	animation: ${spin} 1000ms linear infinite;
`
