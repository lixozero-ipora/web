import React from 'react'
import { Link } from 'react-router-dom'
import { MdDateRange } from 'react-icons/md'

import {
	Image,
	BlurredImageContainer,
	ContentContainer,
	ContentText,
	InfoContainer,
	LastEdited,
	Title,
} from '../../components/Common/styles'
import NavBar from '../../components/Navbar'
import girlLikeImage from '../../assets/images/schedule_date.svg'
import Footer from '../../components/Footer'
import { ScheduleContainer, Table, TableHead, TableItem } from './styles'
import useScrollTop from '../../hooks/useScrollTop'
import useGetSchedules from '../../hooks/useGetSchedules'
import Loading from '../../components/Loading'

const Schedule: React.FC = () => {
	const [schedules, isScheduleLoading] = useGetSchedules()

	useScrollTop()

	const updatedAt =
		schedules.length > 1 ? new Date(schedules[0].updated_at) : null

	return (
		<>
			<NavBar />
			<BlurredImageContainer>
				<Image src={girlLikeImage} />
			</BlurredImageContainer>
			<ContentContainer>
				<Title>
					<span>
						<MdDateRange size={60} />
					</span>{' '}
					Veja as datas de coleta
				</Title>
				<InfoContainer>
					<LastEdited>
						Última edição{' '}
						{updatedAt
							? `${updatedAt.toLocaleString('pt-br', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric',
							  })}`
							: null}
					</LastEdited>
				</InfoContainer>
				<ContentText>
					<p>
						Fique atento sobre a coleta em seu bairro e, caso seu lixo não seja
						recolhido na porta de sua casa,{' '}
						<Link to="/denuncia">reclame aqui</Link>.
					</p>
					<p>
						A seguir, constam os bairros conforme as datas definidas para a
						coleta.
					</p>
				</ContentText>
				<ScheduleContainer>
					<Table>
						<TableHead>
							<p>Bairros</p>
							<p>Início da coleta</p>
							<p>Fim da coleta</p>
						</TableHead>
						{isScheduleLoading && <Loading />}
						{schedules.map((schedule) => (
							<TableItem data-aos="fade-left" key={schedule.id}>
								<p>{schedule.neighborhood}</p>
								<p>{schedule.start}</p>
								<p>{schedule.end}</p>
							</TableItem>
						))}
					</Table>
				</ScheduleContainer>
			</ContentContainer>
			<Footer />
		</>
	)
}

export default Schedule
