import styled from 'styled-components'

export const AdminContainer = styled.div`
	width: 90%;
	margin: 20px auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 992px) {
		flex-direction: column;
		button {
			margin-top: 10px;
		}
	}
`
