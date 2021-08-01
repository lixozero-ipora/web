import React from 'react'
import { Popup } from 'react-leaflet'

import mapIconSVG from '../../assets/images/trash-alt-solid.svg'
import { MapButton } from './styles'

interface ComplaintPopupProps {
	id: string
	latitude: number
	longitude: number
	onClick: (id: string) => void
}

const ComplaintPopup: React.FC<ComplaintPopupProps> = ({
	latitude,
	longitude,
	id,
	onClick,
}) => {
	const handleClick = () => {
		onClick(id)
	}

	return (
		<Popup
			position={[latitude, longitude]}
			closeButton={false}
			closeOnClick={false}
			minWidth={30}
			maxWidth={30}
		>
			<MapButton type="button" onClick={handleClick}>
				<img src={mapIconSVG} alt="Lixeira" />
			</MapButton>
		</Popup>
	)
}

export default ComplaintPopup
