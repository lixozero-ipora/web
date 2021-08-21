import React from 'react'
import { LoadingContainer, LoadingElement, LoadingMessage } from './styles'

interface LoadingProps {
	message?: string
	size?: 'normal' | 'large'
}

const Loading: React.FC<LoadingProps> = ({ message, size = 'normal' }) => (
	<LoadingContainer>
		<LoadingMessage size={size}>
			{!message ? 'Carregando' : message}
		</LoadingMessage>
		<LoadingElement size={size} />
	</LoadingContainer>
)

export default Loading
