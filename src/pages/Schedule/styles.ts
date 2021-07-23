import styled from 'styled-components'

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ScheduleContainer = styled.div`
	display: flex;
	flex-direction: column;
	p {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 5px;
		border-radius: 10px;
		margin: 5px 0;
		border: 1px solid var(--color-green);
		background-color: #fff;

		span {
			display: inline-block;
			margin-left: 5px;
			padding: 3px;
			color: #fff;
			border-radius: 10px;
		}
		span.green {
			background-color: var(--color-green);
		}
		span.red {
			margin: 0;
			background-color: var(--color-red);
		}
	}

	@media (max-width: 768px) {
		p {
			flex-direction: column;
		}
	}
`
