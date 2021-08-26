import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent, LocationEvent } from 'leaflet'
import { BsPencilSquare } from 'react-icons/bs'
import { SiOpenstreetmap } from 'react-icons/si'
import swal from 'sweetalert'
import { MdHearing } from 'react-icons/md'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import NavBar from '../../components/Navbar'
import {
	AddressInfoContainer,
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
import iporaNeighborhoods from '../../assets/iporaNeighborhoods.json'

const Complaint: React.FC = () => {
	useScrollTop()
	const { push } = useHistory()
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
	const [loading, setLoading] = useState(false)
	const [name, setName] = useState('')
	const [adress, setAdress] = useState({
		neighborhood: '',
		street: '',
		number: '',
		complement: '',
	})
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
			name: yup.string().required('Você deve fornecer o seu nome'),
			whatsapp: yup
				.string()
				.min(8, 'O seu número deve ter pelo menos 8 caracteres')
				.max(15, 'O seu número deve ter no máximo 15 caracteres')
				.required('O campo telefone é obrigatório!'),
			neighborhood: yup.string().required('Você precisa selecionar um bairro'),
			street: yup.string().required('Você deve digitar a sua Rua ou Avenida'),
			number: yup
				.string()
				.required('Você precisa fornecer um número no endereço'),
			description: yup.string().required('O campo descrição é obrigatória!'),
		})

		try {
			await schema.validate(
				{
					name,
					neighborhood: adress.neighborhood,
					street: adress.street,
					number: adress.number,
					whatsapp,
					description,
					latitude: position.latitude,
					longitude: position.longitude,
				},
				{ abortEarly: false }
			)
		} catch (error) {
			error.errors.map((msg: string) => toast.error(msg, { autoClose: 10000 }))
			return
		}

		try {
			if (loading) {
				return
			}
			setLoading(true)

			const complaintInfo = {
				name,
				neighborhood: adress.neighborhood,
				adress: `${adress.street}, ${adress.number}.${
					adress.complement && ` ${adress.complement}`
				}`,
				whatsapp,
				description,
				latitude: position.latitude,
				longitude: position.longitude,
			}

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

	const handleChangeAdress = (
		value: string,
		keyToChange: keyof typeof adress
	) => {
		setAdress((prevState) => ({ ...prevState, [keyToChange]: value }))
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
						<AddressInfoContainer>
							<div className="select-container">
								<select
									defaultValue="default"
									onChange={(e) =>
										handleChangeAdress(e.target.value, 'neighborhood')
									}
								>
									<option hidden disabled value="default">
										Selecionar bairro
									</option>
									{iporaNeighborhoods.map((neighborhood) => (
										<option key={neighborhood} value={neighborhood}>
											{neighborhood}
										</option>
									))}
								</select>
							</div>
							<AnimatedInputText
								label="Rua/Avenida"
								value={adress.street}
								onChange={(e) => handleChangeAdress(e, 'street')}
								stayUp
							/>
							<AnimatedInputText
								label="Número"
								type="number"
								value={adress.number}
								onChange={(e) => handleChangeAdress(e, 'number')}
								stayUp
							/>
							<AnimatedInputText
								label="Complemento"
								value={adress.complement}
								onChange={(e) => handleChangeAdress(e, 'complement')}
								stayUp
							/>
						</AddressInfoContainer>
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
							Clique no botão “Auto Localize” ou dê um zoom no mapa com a
							rolagem do mouse ou botão com símbolo “+” no lado esquerdo. Assim
							que localizar o ponto da não-coleta marque com um clique. Em ambas
							as ações, confirme no botão “Adicionar reclamação”.
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
