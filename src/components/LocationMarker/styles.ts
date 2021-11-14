import styled from 'styled-components';

export const GetMyLocationContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	width: 30%;
	height: 10%;
	top: 10px;
	right: 10px;
	z-index: 1000;

	@media (max-width: 992px) {
		width: 50%;
	}
	@media (max-width: 768px) {
		width: 80%;
	}
`;
