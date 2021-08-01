import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import { BsPencilSquare } from 'react-icons/bs'
import { SiOpenstreetmap } from 'react-icons/si'
import swal from 'sweetalert'
import { MdHearing } from 'react-icons/md'

import NavBar from '../../components/Navbar'
import {
	ComplaintButton,
	ComplaintContentContainer,
	ComplaintMapContainer,
	ComplaintStep,
} from './styles'
import {
	BlurredImageContainer,
	ContentContainer,
	ContentText,
	Image,
	Title,
} from '../../components/Common/styles'
import complaintSVG from '../../assets/images/complaint.svg'
import LocationMarker from '../../components/LocationMarker'
import useScrollTop from '../../hooks/useScrollTop'
import Footer from '../../components/Footer'
import AnimatedInputText from '../../components/AnimatedInputText'

const Complaint: React.FC = () => {
	useScrollTop()
	const { push } = useHistory()
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
	const [name, setName] = useState('')
	const [adress, setAdress] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [description, setDescripion] = useState('')

	const handleClickComplaint = () => {
		const complainedKey = localStorage.getItem('@complained')
		if (complainedKey) {
			const complained = JSON.parse(complainedKey)

			const complainedDate = new Date(complained.date)
			// Day that the person complained + 3 days
			if (complainedDate.getTime() + 60 * 3600 * 72 > Date.now()) {
				swal(
					'Parece que você já reclamou',
					'Tente novamente após três dias da última reclamação.',
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
				'Você precisa selecionar um local no mapa para a reclamação.',
				'error'
			)
			return
		}

		localStorage.setItem('@complained', JSON.stringify({ date: Date.now() }))
		swal(
			'Reclamação registrada',
			'Muito obrigado! A sua reclamação foi registrada.',
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
			<BlurredImageContainer>
				<Image src={complaintSVG} />
			</BlurredImageContainer>
			<ContentContainer>
				<Title>
					<span>
						<MdHearing size={60} />
					</span>{' '}
					Reclame Aqui
				</Title>
				<ContentText>
					<p>
						A prefeitura dispõe desta ferramenta de feedback com o objetivo de
						fornecer informações para aprimoramento do planejamento e execução
						de rotas percorridas pelo caminhão coletor ou das estratégias de
						recolhimento de lixo planejada e executada pelos coletores.
					</p>
					<p>
						Desta forma, o gestor público encarregado pode ampliar de forma
						operacional a cobertura da política de coleta urbana em todas as
						casas iporaenses, assim como fiscalizar todo o processo.
					</p>
					<p>
						Para efetuar uma reclamação, se caso o caminhão de coleta não passou
						pela sua região, deve ser verificado primeiro as data pré-definidas{' '}
						<Link to="/datas">aqui</Link>.
					</p>
					<p>Então, siga o passo a passo da seguinte forma:</p>
				</ContentText>
			</ContentContainer>
			<ComplaintContentContainer>
				<ComplaintStep>
					<p>
						<BsPencilSquare size={32} /> Passo 1
					</p>
					<p>Preencha primeiro de forma completa as informações solicitadas.</p>
				</ComplaintStep>
				<form>
					<AnimatedInputText
						label="Nome completo"
						value={name}
						onChange={(e) => setName(e)}
					/>
					<AnimatedInputText
						label="Endereço (Logradouro, número)"
						value={adress}
						onChange={(e) => setAdress(e)}
					/>
					<AnimatedInputText
						label="Telefone ou Whatsapp"
						value={whatsapp}
						onChange={(e) => setWhatsapp(e)}
					/>
					<AnimatedInputText
						label="Descrição da ocorrência"
						value={description}
						onChange={(e) => setDescripion(e)}
					/>
				</form>
				<ComplaintStep>
					<p>
						<SiOpenstreetmap size={32} /> Passo 2
					</p>
					<p>
						Dê um zoom no mapa, e marque com um clique o local de sua moradia,
						que é o ponto da não-coleta e, confirme no botão “Reclamar”.
					</p>
				</ComplaintStep>
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
					Reclamar
				</ComplaintButton>
			</ComplaintContentContainer>
			<Footer />
		</>
	)
}

export default Complaint
