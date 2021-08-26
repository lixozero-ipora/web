import { LeafletMouseEvent, LocationEvent } from 'leaflet'
import React from 'react'
import { Marker, useMapEvents } from 'react-leaflet'
import swal from 'sweetalert'
import mapIcon from '../../utils/mapIcon'
import { Button } from '../Common/styles'
import { GetMyLocationContainer } from './styles'

interface LocationMarkerProps {
	latitude: number
	longitude: number
	onMapClick: (event: LeafletMouseEvent) => void
	onLocationFound: (event: LocationEvent) => void
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
	latitude,
	longitude,
	onMapClick,
	onLocationFound,
}) => {
	const map = useMapEvents({
		click: onMapClick,
		locationfound: (e) => {
			map.flyTo(e.latlng, 17)
			onLocationFound(e)
		},
	})

	const handleGetMyLocation = async () => {
		const result = await navigator.permissions.query({ name: 'geolocation' })
		if (result.state === 'prompt') {
			swal(
				'Permissão',
				'É necessária a sua autorização para que a sua localização possa ser utilizada. Por favor, permita a utilização da sua localização.',
				'info'
			)
		}
		if (result.state === 'denied') {
			navigator.geolocation.getCurrentPosition(
				() => 0,
				() => 0,
				{ enableHighAccuracy: true }
			)
			swal(
				'Erro na permissão',
				'Você precisa permitir o acesso à localização. Tente acessar as configurações do seu navegador e permitir a geolocalização. Caso não funcione este recurso pode não estar disponível no seu dispositivo.',
				'error'
			)
		}

		map.locate({ enableHighAccuracy: true })
	}

	return (
		<>
			<GetMyLocationContainer>
				<Button onClick={handleGetMyLocation}>Auto Localize</Button>
			</GetMyLocationContainer>
			<Marker
				interactive={false}
				icon={mapIcon.red}
				position={[latitude, longitude]}
			/>
		</>
	)
}

export default LocationMarker
