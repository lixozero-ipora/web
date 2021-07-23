import React from 'react'
import { ButtonOutline } from '../Common/styles'
import {
	ButtonContainer,
	PostContainer,
	PostContent,
	PostImage,
	PostText,
	PostTitle,
} from './styled'

interface PostProps {
	title: string
	text: string
	image: string
	showReadMore?: boolean
	onReadMore?: () => void
}

const Post: React.FC<PostProps> = ({
	title,
	text,
	image,
	showReadMore,
	onReadMore,
}) => (
	<PostContainer>
		<PostImage src={image} />
		<PostContent>
			<PostTitle>{title}</PostTitle>
			<PostText>{text}</PostText>
			{showReadMore && (
				<ButtonContainer>
					<ButtonOutline onClick={onReadMore}>Leia mais</ButtonOutline>
				</ButtonContainer>
			)}
		</PostContent>
	</PostContainer>
)

export default Post
