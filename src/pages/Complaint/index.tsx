import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import swal from 'sweetalert'

import NavBar from '../../components/Navbar'
import {
	ComplaintButton,
	ComplaintContentContainer,
	ComplaintMapContainer,
} from './styles'
import {
	ContentContainer,
	ContentText,
	Title,
} from '../../components/Common/styles'
import LocationMarker from '../../components/LocationMarker'
import useScrollTop from '../../hooks/useScrollTop'
import Footer from '../../components/Footer'

const Complaint: React.FC = () => {
	useScrollTop()
	const { push } = useHistory()
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

	const handleClickComplaint = () => {
		const complainedKey = localStorage.getItem('@complained')
		if (complainedKey) {
			const complained = JSON.parse(complainedKey)

			const complainedDate = new Date(complained.date)
			// Day that the person complained + 3 days
			if (complainedDate.getTime() + 60 * 3600 * 72 > Date.now()) {
				swal(
					'Parece que você já denunciou',
					'É necessário um intervalo antes da próxima denúncia, tente novamente após três dias da última denúncia.',
					'error'
				).then(() => {
					push('/')
				})
				return
			}
		}

		if (!position.latitude) {
			swal(
				'Localização necessária',
				'Você precisa selecionar um local no mapa para a denúncia.',
				'error'
			)
			return
		}

		localStorage.setItem('@complained', JSON.stringify({ date: Date.now() }))
		swal(
			'Denúncia registrada',
			'Muito obrigado! A sua denúncia foi registrada',
			'success'
		).then(() => {
			push('/')
		})
	}

	const handleMapClick = (event: LeafletMouseEvent) => {
		setPosition({
			latitude: event.latlng.lat,
			longitude: event.latlng.lng,
		})
	}

	return (
		<>
			<NavBar />
			<ContentContainer>
				<Title>Denúncia</Title>
				<ContentText>
					<p>
						Sempre antes de efutar uma denúncia verifique os horários, para ter
						certeza que o caminhão de coleta ainda não passou pela sua região.
					</p>

					<p>
						A prefeitura espera um feedback para que possam ser feitas
						alterações no planejamento quanto à rotas de coleta. E para que seja
						visível esse feeback é necessário um local onde a coleta não
						ocorreu, desta forma os agentes públicos conseguem avaliar uma nova
						forma de atender toda a população.
					</p>
				</ContentText>
			</ContentContainer>
			<ComplaintContentContainer>
				<strong>Como a denúncia funciona?</strong>

				<p>
					Para denunciar basta dar um zoom onde deseja e clicar em um ponto onde
					a coleta não foi realizada. Após isso basta enviar a sua denuncia
					clicando no botão abaixo do mapa.
				</p>
				<p>
					Lembre-se que é de extrema importância que a sua denúncia seja válida
					para que haja uma melhora na coleta!
				</p>
				<ComplaintMapContainer>
					<MapContainer
						center={[-16.44110683151371, -51.11805438995362]}
						style={{ width: '100%', height: 400 }}
						zoom={15}
						minZoom={15}
						scrollWheelZoom
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>

						<LocationMarker
							latitude={position.latitude}
							longitude={position.longitude}
							onMapClick={handleMapClick}
						/>
					</MapContainer>
				</ComplaintMapContainer>
				<ComplaintButton
					isValid={position.longitude !== 0}
					onClick={handleClickComplaint}
				>
					Denunciar
				</ComplaintButton>
			</ComplaintContentContainer>
			<Footer />
		</>
	)
}

export default Complaint
