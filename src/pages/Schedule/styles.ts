import styled from 'styled-components';

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ScheduleContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 10px;

	background-color: white;
	border-radius: 10px;
`;

export const Table = styled.div`
	display: flex;
	flex-direction: column;
`;
export const TableItem = styled.div`
	display: flex;
	flex-wrap: nowrap;
	color: var(--color-text-dark);
	border-bottom: 1px solid var(--color-text-dark);

	p {
		display: flex;
		justify-content: center;
		text-align: start;
		align-items: center;
		word-wrap: break-word;
	}

	p:nth-child(1) {
		flex: 2;
		justify-content: flex-start;
	}
	p:nth-child(2) {
		flex: 1;
		color: var(--color-green);
	}
	p:nth-child(3) {
		flex: 1;
		color: var(--color-green);
	}

	@media (max-width: 768px) {
		p:nth-child(1) {
			flex: 1;
		}
	}
`;

export const TableHead = styled(TableItem)`
	font-weight: bold;
	border-width: 3px;
`;
