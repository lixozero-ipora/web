import styled from 'styled-components'

interface ActionButtonProps {
	isActive: boolean
}

export const EditScheduleItemContainer = styled.div`
	border: 1px solid var(--color-text-dark);
	display: flex;
	align-items: center;
	height: 40px;
	margin: 10px 0;
	border-radius: 10px;
	overflow: hidden;
`

export const ActionButton = styled.div<ActionButtonProps>`
	width: 10%;
	height: 100%;
	border-right: 1px solid var(--color-text-dark);
	transition: all 300ms ease;
	word-break: break-all;

	background-color: ${(props) =>
		props.isActive ? 'var(--color-blue-opaque)' : 'var(--color-gray-dark)'};

	> button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		display: flex;
		border: none;
		background: none;
		height: 100%;
		color: white;
		text-transform: capitalize;
	}
`

export const EditItemInfo = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	padding: 0 10px;

	span {
		display: flex;
		align-items: center;
		border-radius: 10px;
		padding: 5px;
	}

	span:nth-child(1) {
		flex: 2;
		font-weight: bold;
	}

	span:nth-child(2),
	span:nth-child(3) {
		flex: 1;
		color: white;
		justify-content: center;
	}

	span:nth-child(2) {
		margin-right: 5px;
		background-color: var(--color-green);
	}
	span:nth-child(3) {
		background-color: var(--color-orange);
	}
`
