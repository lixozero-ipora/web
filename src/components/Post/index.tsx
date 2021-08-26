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
	preventAnimation?: boolean
	titleIcon?: React.ReactElement
	showReadMore?: boolean
	onReadMore?: () => void
}

const Post: React.FC<PostProps> = ({
	title,
	text,
	image,
	preventAnimation,
	titleIcon,
	showReadMore,
	onReadMore,
}) => (
	<PostContainer data-aos={preventAnimation ? null : 'fade-right'}>
		<PostImage src={image} onClick={onReadMore} />
		<PostContent>
			<PostTitle onClick={onReadMore}>
				<span>{titleIcon}</span>
				{title}
			</PostTitle>
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
