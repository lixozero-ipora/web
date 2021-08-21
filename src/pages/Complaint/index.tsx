import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent, LocationEvent, Map } from 'leaflet'
import { BsPencilSquare } from 'react-icons/bs'
import { SiOpenstreetmap } from 'react-icons/si'
import swal from 'sweetalert'
import { MdHearing } from 'react-icons/md'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import NavBar from '../../components/Navbar'
import {
	ComplaintButton,
	ComplaintContentContainer,
	ComplaintMapContainer,
	ComplaintStep,
	LoadingBoxContainer,
	ToBlur,
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
import alreadyComplainedCheck from '../../utils/alreadyComplainedCheck'
import api from '../../services/api'
import Loading from '../../components/Loading'

const Complaint: React.FC = () => {
	useScrollTop()
	const { push } = useHistory()
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
	const [loading, setLoading] = useState(false)
	const [name, setName] = useState('')
	const [adress, setAdress] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [description, setDescripion] = useState('')

	const handleClickComplaint = async () => {
		if (await alreadyComplainedCheck()) {
			return
		}

		if (position.longitude === 0 || position.latitude === 0) {
			swal(
				'Localização necessária',
				'Você precisa selecionar um local no mapa para a reclamação.',
				'error'
			)
			return
		}

		const schema = yup.object().shape({
			name: yup.string().required('O campo nome é obrigatório!'),
			adress: yup.string().required('O campo endereço é obrigatório!'),
			whatsapp: yup
				.string()
				.min(8, 'O seu número deve ter pelo menos 8 caracteres')
				.max(15, 'O seu número deve ter no máximo 15 caracteres')
				.required('O campo telefone é obrigatório!'),
			description: yup.string().required('O campo descrição é obrigatória!'),
		})

		const complaintInfo = {
			name,
			adress,
			whatsapp,
			description,
			latitude: position.latitude,
			longitude: position.longitude,
		}

		try {
			await schema.validate(complaintInfo, { abortEarly: false })
		} catch (error) {
			error.errors.map((msg: string) => toast.error(msg, { autoClose: 10000 }))
			return
		}

		try {
			if (loading) {
				return
			}
			setLoading(true)

			await api.post('/complaints', complaintInfo)

			localStorage.setItem('@complained', JSON.stringify({ date: Date.now() }))
			await swal(
				'Reclamação registrada',
				'A sua reclamação já está registrada em nosso sistema, em breve ela será visualizada e resolvida. Muito obrigado!',
				'success'
			)
		} catch (error) {
			await swal(
				'Aconteceu um problema',
				'Nossas máquinas estão enfrentando alguns problemas, tente registrar esta reclamação mais tarde',
				'error'
			)
		} finally {
			setLoading(false)
			push('/')
		}
	}

	const handleMapClick = (event: LeafletMouseEvent) => {
		setPosition({
			latitude: event.latlng.lat,
			longitude: event.latlng.lng,
		})
	}

	const handleLocationFound = (event: LocationEvent) => {
		swal(
			'Localização encontrada!',
			'Lembre-se que a localização nem sempre é tão precisa. Então verifique se a localização da lixeira em laranja é a mesma que a do seu endereço',
			'success'
		)
		setPosition({ latitude: event.latlng.lat, longitude: event.latlng.lng })
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
				{loading && (
					<LoadingBoxContainer>
						<div className="box">
							<Loading message="Enviando sua reclamação" size="large" />
						</div>
					</LoadingBoxContainer>
				)}
				<ToBlur isBlurred={loading}>
					<ComplaintStep>
						<p>
							<BsPencilSquare size={32} /> Passo 1
						</p>
						<p>
							Preencha primeiro de forma completa as informações solicitadas.
						</p>
					</ComplaintStep>
					<form>
						<AnimatedInputText
							label="Nome completo"
							value={name}
							onChange={setName}
						/>
						<AnimatedInputText
							label="Endereço (Logradouro, número)"
							value={adress}
							onChange={(e) => setAdress(e)}
						/>
						<AnimatedInputText
							label="Telefone com DDD"
							value={whatsapp}
							onChange={(e) => setWhatsapp(e.replace(/\D+/gi, ''))}
						/>
						<AnimatedInputText
							label="Descrição da ocorrência"
							value={description}
							onChange={setDescripion}
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
								onLocationFound={handleLocationFound}
							/>
						</MapContainer>
					</ComplaintMapContainer>
					<ComplaintButton
						disabled={position.longitude === 0 && position.latitude === 0}
						isValid={position.longitude !== 0}
						onClick={handleClickComplaint}
					>
						Adicionar Reclamação
					</ComplaintButton>
				</ToBlur>
			</ComplaintContentContainer>
			<Footer />
		</>
	)
}

export default Complaint
