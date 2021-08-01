import styled from 'styled-components'
import { LoadingMessage } from '../../components/Loading/styles'

export const ComplaintsViewContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const MapBoxContainer = styled.div`
	width: 75%;
	height: calc(100vh - 90px);
	display: flex;
	justify-content: center;
	position: relative;

	div.blur-background {
		position: absolute;
		z-index: 1000;
		margin-top: 30%;
		width: 65%;
		font-weight: bold;
		background-color: white;
		border-radius: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

		${LoadingMessage} {
			font-size: 2.5rem;
		}
	}

	.leaflet-popup-content {
		margin: 2px;
		display: flex;
		justify-content: center;
	}
`

export const ComplaintsBoxContainer = styled.section`
	width: 35%;
	height: calc(100vh - 90px);
	border-left: 2px solid var(--color-green);
	padding: 5px;
	overflow: scroll;
`

export const ComplaintMessage = styled.p`
	margin: 15px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	color: var(--color-green);
`

export const ComplaintInfo = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;

	span.info {
		margin-top: 5px;
		padding: 5px;
		background-color: white;
		border-radius: 10px;

		strong {
			color: var(--color-green);
		}
	}

	> strong {
		text-align: center;
		font-size: 2rem;
		color: var(--color-blue-dark);
	}
`

export const CitizenInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	background-color: white;
	border: 1px solid var(--color-green);
	padding: 5px;
	border-radius: 20px;

	span.info {
		padding: 0;
	}
`
