import { LeafletMouseEvent } from 'leaflet'
import React from 'react'
import { Marker, useMapEvents } from 'react-leaflet'
import mapIcon from '../../utils/mapIcon'

interface LocationMarkerProps {
	latitude: number
	longitude: number
	onMapClick: (event: LeafletMouseEvent) => void
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
	latitude,
	longitude,
	onMapClick,
}) => {
	useMapEvents({
		click: onMapClick,
	})

	return (
		<Marker
			interactive={false}
			icon={mapIcon}
			position={[latitude, longitude]}
		/>
	)
}

export default LocationMarker
