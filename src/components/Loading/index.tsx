import React from 'react'
import { LoadingContainer, LoadingElement, LoadingMessage } from './styles'

interface LoadingProps {
	message?: string
}

const Loading: React.FC<LoadingProps> = ({ message }) => (
	<LoadingContainer>
		<LoadingMessage>{!message ? 'Carregando' : message}</LoadingMessage>
		<LoadingElement />
	</LoadingContainer>
)

export default Loading
