import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import swal from 'sweetalert';
import { Complaint } from '../../@types';
import CitizenInfo from '../../components/CitizenInfo';
import { ButtonOutline } from '../../components/Common/styles';
import ComplaintPopup from '../../components/ComplaintPopup';
import Loading from '../../components/Loading';
import NavBar from '../../components/Navbar';
import api from '../../services/api';
import {
	ComplaintInfo,
	ComplaintMessage,
	ComplaintsBoxContainer,
	ComplaintsViewContainer,
	MapBoxContainer,
} from './styles';

interface Complaints {
	showing: Complaint;
	items: Complaint[];
}

const ComplaintsView: React.FC = () => {
	const [complaints, setComplaints] = useState<Complaints>({
		showing: {} as Complaint,
		items: [],
	});
	const [isLoading, setIsLoading] = useState(true);
	const [showSolved, setShowSolved] = useState(false);

	useEffect(() => {
		getComplaints();
	}, []);

	const getComplaints = async () => {
		try {
			const response = await api.get<Array<Complaint>>('/complaints');
			setComplaints((prevState) => ({ ...prevState, items: response.data }));
		} catch (error) {
			swal(
				'Occoreu um erro',
				'Não conseguimos carregar as reclamações, tente novamente mais tarde',
				'error'
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChangeComplaintShowing = (id: string) => {
		const newShowing = complaints.items.find((item) => item.id === id);

		if (!newShowing) {
			return;
		}

		setComplaints((prevState) => ({
			...prevState,
			showing: newShowing,
		}));
	};

	const handleShowSolved = () => {
		setShowSolved((prevState) => !prevState);
	};

	const handleSolveComplaint = async (
		index: number,
		whatsapp: string,
		unsolve?: boolean
	) => {
		swal('Alterando a reclamação...', '', 'info');
		try {
			const newComplaint = await api.put(
				`/complaints/${complaints.showing.id}/${unsolve ? 'unsolve' : ''}`,
				{
					solvedIndex: index,
					whatsapp,
				}
			);

			if (
				newComplaint.data.has_active_complaints !==
				complaints.showing.has_active_complaints
			) {
				getComplaints();
			}

			setComplaints((prevState) => {
				return {
					...prevState,
					showing: newComplaint.data,
				};
			});
			swal('Reclamação alterada!', '', 'success');
		} catch (error) {
			swal(
				'Erro ao resolver reclamação',
				'Nossas máquinas no momento não conseguiram resolver essa reclamação, tente mais tarde.',
				'error'
			);
		}
	};

	const handleGenerateReport = async () => {
		const report = await api.get('/reports', { responseType: 'blob' });

		const blobURL = URL.createObjectURL(new Blob([report.data]));
		const link = document.createElement('a');
		link.href = blobURL;
		link.setAttribute(
			'download',
			`relatorio_${new Date().toLocaleDateString()}.xlsx`
		);
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

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
						zoom={13}
						minZoom={14}
						scrollWheelZoom
					>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{complaints.items
							.filter(
								(complaint) => complaint.has_active_complaints || showSolved
							)
							.map((complaint) => {
								return (
									<ComplaintPopup
										key={complaint.id}
										id={complaint.id}
										latitude={complaint.latitude}
										longitude={complaint.longitude}
										mapIconColor={
											complaint.has_active_complaints ? 'red' : 'green'
										}
										onClick={handleChangeComplaintShowing}
									/>
								);
							})}
					</MapContainer>
				</MapBoxContainer>
				<ComplaintsBoxContainer data-aos="fade-left">
					<ButtonOutline onClick={handleShowSolved}>
						{showSolved
							? 'Esconder reclamações resolvidas'
							: 'Mostrar reclamações resolvidas'}
					</ButtonOutline>
					<ButtonOutline onClick={handleGenerateReport}>
						Gerar relatório
					</ButtonOutline>
					{!complaints.showing.id && (
						<ComplaintMessage>
							Selecione uma reclamação, para visualizar suas informações.
						</ComplaintMessage>
					)}
					{complaints.showing.id && (
						<ComplaintInfo>
							<span className="card">
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
							<span className="card">
								<strong>Ocorrências</strong>: Em um raio de 30 metros,{' '}
								<strong>{complaints.showing.occurrences}</strong>
								{complaints.showing.occurrences > 1
									? ' pessoas reclamaram'
									: ' pessoa reclamou'}{' '}
								neste ponto de não coleta.
							</span>
							<strong className="red">Reclamações ativas:</strong>
							{!complaints.showing.active.length && (
								<span className="card">Nenhuma reclamação ativa</span>
							)}
							{complaints.showing.active.map((citizen, index) => (
								<CitizenInfo
									index={index}
									color="var(--color-orange)"
									name={citizen.name}
									neighborhood={citizen.neighborhood}
									adress={citizen.adress}
									whatsapp={citizen.whatsapp}
									description={citizen.description}
									created_at={citizen.created_at}
									showButton
									buttonText="Resolver reclamação"
									buttonColor="var(--color-orange)"
									buttonOnClick={handleSolveComplaint}
								/>
							))}
							<strong className="green">Reclamações resolvidas:</strong>
							{!complaints.showing.solved.length && (
								<span className="card">Nenhuma reclamação resolvida</span>
							)}
							{complaints.showing.solved.map((citizen, index) => (
								<CitizenInfo
									index={index}
									color="var(--color-green)"
									name={citizen.name}
									adress={citizen.adress}
									neighborhood={citizen.neighborhood}
									whatsapp={citizen.whatsapp}
									description={citizen.description}
									created_at={citizen.created_at}
									solved_at={citizen.solved_at}
									showButton
									buttonText="Desfazer resolução da reclamação"
									buttonColor="var(--color-green)"
									unsolve
									buttonOnClick={handleSolveComplaint}
								/>
							))}
						</ComplaintInfo>
					)}
				</ComplaintsBoxContainer>
			</ComplaintsViewContainer>
		</>
	);
};

export default ComplaintsView;
