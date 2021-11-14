import styled from 'styled-components';
import { ButtonOutline } from '../../components/Common/styles';

export const AdminContainer = styled.div`
	width: 90%;
	height: 80vh;
	margin: 20px auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	form {
		width: 40%;

		${ButtonOutline} {
			display: block;
			margin-top: 10px;
			margin-left: auto;
		}
	}

	@media (max-width: 992px) {
		flex-direction: column;
		button {
			margin-top: 10px;
		}
	}
`;
