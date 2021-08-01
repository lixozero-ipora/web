import styled from 'styled-components'

export const PostContainer = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 10px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

export const PostImage = styled.img`
	background-color: white;
	padding: 5px;

	display: block;
	width: 30%;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	object-fit: contain;

	@media (max-width: 768px) {
		width: 100%;
		height: 200px;

		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
`

export const PostContent = styled.div`
	color: var(--color-text-dark);
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	margin-left: 20px;
	padding: 10px 20px;
	border-radius: 10px;
	background-color: #fff;

	@media (max-width: 768px) {
		border-top-right-radius: 0;
		border-top-left-radius: 0;
		margin: 0;
	}
`

export const PostTitle = styled.strong`
	font-size: 4rem;
	display: flex;
	align-items: center;

	span {
		display: flex;
		margin-right: 10px;
	}
`

export const PostText = styled.p`
	font-size: 2rem;
	overflow: hidden;
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`
