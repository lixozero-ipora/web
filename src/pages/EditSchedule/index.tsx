import React, { useEffect, useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import swal from 'sweetalert'
import { EditingSchedule } from '../../@types'
import AnimatedInputText from '../../components/AnimatedInputText'
import {
	ButtonOutline,
	CardWithBrandThreeTexts,
	ContentText,
	Title,
} from '../../components/Common/styles'
import EditingScheduleList from '../../components/EditingScheduleList'
import Loading from '../../components/Loading'
import NavBar from '../../components/Navbar'
import useGetSchedules from '../../hooks/useGetSchedules'
import api from '../../services/api'
import addZeroInDate from '../../utils/addZeroInNumber'
import {
	EditScheduleContainer,
	InputsContainer,
	StepsContainer,
} from './styles'

const EditSchedule: React.FC = () => {
	const [scheduleItems, isScheduleLoading] = useGetSchedules()
	const [newStart, setNewStart] = useState('')
	const [newEnd, setNewEnd] = useState('')
	const [schedules, setSchedules] = useState<EditingSchedule>({
		editing: [],
		items: [],
	})

	useEffect(() => {
		setSchedules((prevState) => ({
			...prevState,
			items: scheduleItems,
		}))
	}, [scheduleItems])

	useEffect(() => {
		if (newStart) {
			changeDate('start', newStart)
		}
		if (newEnd) {
			changeDate('end', newEnd)
		}
	}, [newStart, newEnd, schedules.editing])

	const handleSaveSchedule = async () => {
		try {
			swal(
				'Editando os horários',
				'Os horários estão sendo editados...',
				'info'
			)
			await api.put('/schedules', { schedules: schedules.items })
			swal('Sucesso', 'A edição foi um sucesso!', 'success')
		} catch (error) {
			swal(
				'Houve um erro',
				'Houve um erro atualizando as datas por favor, tente mais tarde',
				'error'
			)
		}
	}

	const changeDate = (key: 'start' | 'end', date: string) => {
		setSchedules((prevState) => ({
			...prevState,
			items: prevState.items.map((editScheduleItem) => {
				if (!prevState.editing.includes(editScheduleItem.id)) {
					return editScheduleItem
				}

				const newDate = new Date(date)
				const newDay = newDate.getDate()
				const newMonth =
					newDay + 1 === 32 ? newDate.getMonth() + 2 : newDate.getMonth() + 1
				return {
					...editScheduleItem,
					[key]: `${addZeroInDate(
						newDay + 1 > 31 ? 1 : newDay + 1
					)}/${addZeroInDate(newMonth)}/${newDate.getFullYear()}`,
				}
			}),
		}))
	}

	const handleClickAction = (id: string) => {
		if (schedules.editing.includes(id)) {
			setSchedules((prevState) => ({
				...prevState,
				editing: prevState.editing.filter((editingN) => editingN !== id),
			}))
			return
		}

		setSchedules((prevState) => ({
			...prevState,
			editing: [...prevState.editing, id],
		}))
	}

	const handleChangeStart = (input: string) => {
		setNewStart(input)
	}
	const handleChangeEnd = (input: string) => {
		setNewEnd(input)
	}

	const handleClearEditing = () => {
		setSchedules((prevState) => ({ ...prevState, editing: [] }))
	}

	const handleSelectAll = () => {
		setSchedules((prevState) => ({
			...prevState,
			editing: prevState.items.map((editScheduleItem) => editScheduleItem.id),
		}))
	}

	return (
		<>
			<NavBar />
			<EditScheduleContainer>
				<Title>Edição de datas</Title>

				<ContentText>
					<StepsContainer>
						<p>Para alteração das datas de coleta, faça o seguinte:</p>
						<CardWithBrandThreeTexts>
							<p>
								<BsPencilSquare size={32} /> Passo 1
							</p>
							<p>
								Selecione os bairros a serem alterados, com clique no botão
								“Ativar”, disposto em cinza à esquerda.
							</p>
						</CardWithBrandThreeTexts>
						<CardWithBrandThreeTexts>
							<p>
								<BsPencilSquare size={32} /> Passo 2
							</p>
							<p>
								Caso clique por engano, ou não deseje selecionar o bairro,
								clique no mesmo botão “Desativar”.
							</p>
						</CardWithBrandThreeTexts>
						<CardWithBrandThreeTexts>
							<p>
								<BsPencilSquare size={32} /> Passo 3
							</p>
							<p>
								Em seguida, na caixa flutuante à esquerda da página, defina nos
								campos, a data inicial e, subsequente, a data final.
							</p>
						</CardWithBrandThreeTexts>
						<CardWithBrandThreeTexts>
							<p>
								<BsPencilSquare size={32} /> Passo 4
							</p>
							<p>
								Para limpar os campos preenchidos relativo as datas por bairro,
								clique no botão “Limpar”.
							</p>
						</CardWithBrandThreeTexts>
						<CardWithBrandThreeTexts>
							<p>
								<BsPencilSquare size={32} /> Passo 5
							</p>
							<p>
								Para selecionar todos os bairros, clique no botão “Selecionar
								todos”.
							</p>
						</CardWithBrandThreeTexts>
					</StepsContainer>
				</ContentText>

				<InputsContainer>
					<AnimatedInputText
						type="date"
						stayUp
						label="Início"
						onChange={handleChangeStart}
						value={newStart}
					/>
					<AnimatedInputText
						type="date"
						stayUp
						themeColor="var(--color-red)"
						label="Fim"
						onChange={handleChangeEnd}
						value={newEnd}
					/>
					<ButtonOutline onClick={handleClearEditing}>Limpar</ButtonOutline>
					<ButtonOutline onClick={handleSelectAll}>
						Selecionar todos
					</ButtonOutline>
					<ButtonOutline onClick={handleSaveSchedule}>Salvar</ButtonOutline>
				</InputsContainer>

				{isScheduleLoading && <Loading message="Carregando datas" />}

				<EditingScheduleList
					schedules={schedules}
					onClick={handleClickAction}
				/>
			</EditScheduleContainer>
		</>
	)
}

export default EditSchedule
