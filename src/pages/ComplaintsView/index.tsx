import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import swal from 'sweetalert'
import { Complaint } from '../../@types'
import ComplaintPopup from '../../components/ComplaintPopup'
import Loading from '../../components/Loading'
import NavBar from '../../components/Navbar'
import api from '../../services/api'
import {
	CitizenInfo,
	ComplaintInfo,
	ComplaintMessage,
	ComplaintsBoxContainer,
	ComplaintsViewContainer,
	MapBoxContainer,
} from './styles'

interface Complaints {
	showing: Complaint
	items: Complaint[]
}

const ComplaintsView: React.FC = () => {
	const [complaints, setComplaints] = useState<Complaints>({
		showing: {} as Complaint,
		items: [],
	})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getComplaints()
	}, [])

	const getComplaints = async () => {
		try {
			const response = await api.get<Array<Complaint>>('/complaints')
			setComplaints((prevState) => ({ ...prevState, items: response.data }))
		} catch (error) {
			swal(
				'Occoreu um erro',
				'Não conseguimos carregar as reclamações, tente novamente mais tarde',
				'error'
			)
		} finally {
			setIsLoading(false)
		}
	}

	const handleChangeComplaintShowing = (id: string) => {
		const newShowing = complaints.items.find((item) => item.id === id)

		if (!newShowing) {
			return
		}

		setComplaints((prevState) => ({
			...prevState,
			showing: newShowing,
		}))
	}

	return (
		<>
			<NavBar />
			<ComplaintsViewContainer>
				<MapBoxContainer>
					{isLoading && (
						<div className="blur-background">
							<Loading message="Carregando reclamações" />
						</div>
					)}
					<MapContainer
						center={[-16.4365129, -51.112477]}
						style={{ width: '100%', height: '100%' }}
						zoom={14}
						minZoom={15}
						scrollWheelZoom
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{complaints.items.map((complaint) => {
							return (
								<ComplaintPopup
									key={complaint.id}
									id={complaint.id}
									latitude={complaint.latitude}
									longitude={complaint.longitude}
									onClick={handleChangeComplaintShowing}
								/>
							)
						})}
					</MapContainer>
				</MapBoxContainer>
				<ComplaintsBoxContainer data-aos="fade-left">
					{!complaints.showing.id ? (
						<ComplaintMessage>
							Selecione uma reclamação, para visualizar suas informações.
						</ComplaintMessage>
					) : (
						<ComplaintMessage>Reclamação selecioanada abaixo.</ComplaintMessage>
					)}
					{complaints.showing.id && (
						<ComplaintInfo>
							<span className="info">
								<strong>Localização</strong>: Você pode visualizar a localização
								no Maps{' '}
								<a
									href={`https://www.google.com/maps/search/?api=1&query=${complaints.showing.latitude},${complaints.showing.longitude}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									aqui
								</a>
								.
							</span>
							<span className="info">
								<strong>Ocorrências</strong>: Esta reclamação já aconteceu{' '}
								<strong>{complaints.showing.occurrences}</strong> vez(es) em um
								raio de 30 metros.
							</span>
							<strong>Pessoas que reclamaram:</strong>
							{complaints.showing.citizens.map((citizen) => (
								<CitizenInfo>
									<span className="info">
										<strong>Nome</strong>: {citizen.name}
									</span>
									<span className="info">
										<strong>Endereço</strong>: {citizen.adress}
									</span>
									<span className="info">
										<strong>Whatsapp</strong>: {citizen.whatsapp}
									</span>
									<span className="info">
										<strong>Descrição da ocorrência</strong>:{' '}
										{citizen.description}
									</span>
								</CitizenInfo>
							))}
						</ComplaintInfo>
					)}
				</ComplaintsBoxContainer>
			</ComplaintsViewContainer>
		</>
	)
}

export default ComplaintsView
