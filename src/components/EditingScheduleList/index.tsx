import React from 'react';
import { EditingSchedule } from '../../@types';
import EditScheduleItem from '../EditScheduleItem';
import { EditScheduleListContainer } from './styles';
import { sortSchedule } from '../../utils/sortSchedule';

interface EditingScheduleListProps {
	schedules: EditingSchedule;
	onClick(id: string): void;
}

const EditingScheduleList: React.FC<EditingScheduleListProps> = ({
	schedules,
	onClick,
}) => (
	<EditScheduleListContainer>
		{schedules.items.sort(sortSchedule).map((scheduleItem) => (
			<EditScheduleItem
				key={scheduleItem.id}
				id={scheduleItem.id}
				neighborhood={scheduleItem.neighborhood}
				start={scheduleItem.start}
				end={scheduleItem.end}
				created_at={scheduleItem.created_at}
				updated_at={scheduleItem.updated_at}
				isActive={schedules.editing.includes(scheduleItem.id)}
				onClickAction={onClick}
			/>
		))}
	</EditScheduleListContainer>
);

export default EditingScheduleList;
