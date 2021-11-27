import styled from 'styled-components';
import {
	Button,
	CardWithBrandThreeTexts,
	ContentContainer,
} from '../../components/Common/styles';

export const EditScheduleContainer = styled(ContentContainer)`
	width: 60%;
`;

export const StepsContainer = styled.div`
	${CardWithBrandThreeTexts} {
		margin: 20px 0;
		color: var(--color-text-dark);
	}
`;

export const InputsContainer = styled.div`
	background-color: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	padding: 5px 10px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	top: 40%;
	left: 5px;

	${Button} {
		margin: 5px 0;
		width: 100%;
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		position: relative;
		margin: 10px 0;
		padding: 0;
		background-color: transparent;
	}
`;
