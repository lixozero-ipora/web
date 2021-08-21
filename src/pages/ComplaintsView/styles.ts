import styled from 'styled-components'
import { ButtonOutline } from '../../components/Common/styles'
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

export const ComplaintMessage = styled.p`
	text-align: center;
	background-color: white;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	color: ${(props) => props.color};
`

export const ComplaintsBoxContainer = styled.section`
	width: 35%;
	height: calc(100vh - 90px);
	border-left: 2px solid var(--color-green);
	overflow: scroll;
	padding-right: 10px;

	div,
	span.info,
	span.card,
	${ComplaintMessage} {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	${ButtonOutline} {
		display: block;
		margin: 20px auto;
	}
`

export const ComplaintInfo = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	margin-right: -10px;

	span.card {
		margin-top: 5px;
		padding: 5px;
		background-color: white;
	}

	> strong {
		text-align: center;
		font-size: 2rem;
	}

	strong.green {
		color: var(--color-green);
	}

	strong.red {
		color: var(--color-orange);
	}
`
