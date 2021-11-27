import React, { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import swal from 'sweetalert';
import { EditingSchedule } from '../../@types';
import AnimatedInputText from '../../components/AnimatedInputText';
import {
	Button,
	CardWithBrandThreeTexts,
	ContentText,
	Title,
} from '../../components/Common/styles';
import EditingScheduleList from '../../components/EditingScheduleList';
import Loading from '../../components/Loading';
import NavBar from '../../components/Navbar';
import useGetSchedules from '../../hooks/useGetSchedules';
import api from '../../services/api';
import addZeroInDate from '../../utils/addZeroInNumber';
import {
	EditScheduleContainer,
	InputsContainer,
	StepsContainer,
} from './styles';

const infoTexts = [
	{
		step: 'Selecione o(s) bairro(s) a serem alterados, clicando no botão de marcação disposto em cinza à esquerda.',
		n: 1,
	},
	{
		hint: 'Caso clique por engano, ou não deseje selecionar o(s) bairro(s), desmarque este botão. Para selecionar todos o(s) bairro(s), clique no botão “Selecionar todos”.',
		n: 0,
	},
	{
		step: 'Com o(s) bairro(s) selecionado(s), na caixa flutuante à esquerda da página, insira nos campos, a data inicial e, subsequente, a data final.',
		n: 2,
	},
	{
		hint: 'Para desmarcar o(s) bairro(s) já selecionados, clique no botão “Desfazer Seleção”. É recomendável clicar em “Desfazer Seleção” toda vez que for iniciar a alteração de outro bairro ou conjunto de bairros.',
		n: 0,
	},
	{
		step: 'Preenchido o campo inicial e final da data, clique no botão “Aplicar Alteração”',
		n: 3,
	},
];

const EditSchedule: React.FC = () => {
	const [scheduleItems, isScheduleLoading] = useGetSchedules();
	const [newStart, setNewStart] = useState('');
	const [newEnd, setNewEnd] = useState('');
	const [schedules, setSchedules] = useState<EditingSchedule>({
		editing: [],
		items: [],
	});

	useEffect(() => {
		setSchedules((prevState) => ({
			...prevState,
			items: scheduleItems,
		}));
	}, [scheduleItems]);

	useEffect(() => {
		if (schedules.editing.length === 0) {
			handleClearStartEnd();
		}

		if (newStart) {
			changeDate('start', newStart);
		}
		if (newEnd) {
			changeDate('end', newEnd);
		}
	}, [newStart, newEnd, schedules.editing]);

	const handleSaveSchedule = async () => {
		try {
			swal(
				'Editando os horários',
				'Os horários estão sendo editados...',
				'info'
			);
			await api.put('/schedules', { schedules: schedules.items });
			swal('Sucesso', 'A edição foi um sucesso!', 'success');
		} catch (error) {
			swal(
				'Houve um erro',
				'Houve um erro atualizando as datas por favor, tente mais tarde',
				'error'
			);
		}
	};

	const changeDate = (key: 'start' | 'end', date: string) => {
		setSchedules((prevState) => ({
			...prevState,
			items: prevState.items.map((editScheduleItem) => {
				if (!prevState.editing.includes(editScheduleItem.id)) {
					return editScheduleItem;
				}

				const newDate = new Date(date);
				const newDay = newDate.getDate();
				const newMonth =
					newDay + 1 === 32 ? newDate.getMonth() + 2 : newDate.getMonth() + 1;
				return {
					...editScheduleItem,
					[key]: `${addZeroInDate(
						newDay + 1 > 31 ? 1 : newDay + 1
					)}/${addZeroInDate(newMonth)}/${newDate.getFullYear()}`,
				};
			}),
		}));
	};

	const handleClickAction = (id: string) => {
		if (schedules.editing.includes(id)) {
			setSchedules((prevState) => ({
				...prevState,
				editing: prevState.editing.filter((editingN) => editingN !== id),
			}));
			return;
		}

		setSchedules((prevState) => ({
			...prevState,
			editing: [...prevState.editing, id],
		}));
	};

	const handleClearStartEnd = () => {
		setNewStart('');
		setNewEnd('');
	};

	const handleChangeStart = (input: string) => {
		setNewStart(input);
	};
	const handleChangeEnd = (input: string) => {
		setNewEnd(input);
	};

	const handleClearEditing = () => {
		setSchedules((prevState) => ({ ...prevState, editing: [] }));
		handleClearStartEnd();
	};

	const handleSelectAll = () => {
		setSchedules((prevState) => ({
			...prevState,
			editing: prevState.items.map((editScheduleItem) => editScheduleItem.id),
		}));
	};

	return (
		<>
			<NavBar />
			<EditScheduleContainer>
				<Title>Gerencie Datas de Coleta</Title>

				<ContentText>
					<StepsContainer>
						<p>Para alteração das datas de coleta, faça o seguinte:</p>
						{infoTexts.map(({ step, hint, n }, index) => (
							<CardWithBrandThreeTexts
								key={`card-${index}`}
								bgColor={step ? '#c9c9c9' : '#b8b7b7'}
							>
								<p>
									<FiInfo size={32} /> {step ? `Passo ${n}` : `Dica`}
								</p>
								{!!hint && <p>{hint}</p>}
								{!!step && <p>{step}</p>}
							</CardWithBrandThreeTexts>
						))}
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
						themeColor="var(--color-orange)"
						label="Fim"
						onChange={handleChangeEnd}
						value={newEnd}
					/>
					<Button onClick={handleClearEditing}>Desfazer Seleção</Button>
					<Button onClick={handleSelectAll}>Selecionar Todos</Button>
					<Button onClick={handleSaveSchedule}>Aplicar Alteração</Button>
				</InputsContainer>

				{isScheduleLoading && <Loading message="Carregando datas" />}

				<EditingScheduleList
					schedules={schedules}
					onClick={handleClickAction}
				/>
			</EditScheduleContainer>
		</>
	);
};

export default EditSchedule;
