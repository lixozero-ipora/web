import styled from 'styled-components';

interface ImageContatinerProps {
	whiteBg?: boolean;
}

export const LadingContainer = styled.div``;

export const SliderContainer = styled.div`
	margin-top: 20px;
	padding: 0 0 20px 0;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const ImageContainer = styled.div<ImageContatinerProps>`
	background-color: ${(props) => (props.whiteBg ? 'white' : 'none')};

	overflow: hidden;
	height: 60vh;
`;

export const LandingImage = styled.img`
	height: 100%;
	width: 95%;

	display: flex;
	justify-content: center;
	align-items: center;
	object-fit: contain;
	margin: 0 auto;

	@media (min-width: 992px) {
		width: 70%;
		height: 90%;
	}
`;

export const ContentContainer = styled.div`
	padding: 20px;
`;
