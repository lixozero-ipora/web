import React from 'react'
import { ScheduleItem } from '../../@types'
import { ActionButton, EditItemInfo, EditScheduleItemContainer } from './styles'

interface EditScheduleItemProps extends ScheduleItem {
	isActive: boolean
	onClickAction(id: string): void
}

const EditScheduleItem: React.FC<EditScheduleItemProps> = ({
	id,
	neighborhood,
	start,
	end,
	isActive,
	onClickAction,
}) => {
	const handleChangeActive = () => {
		onClickAction(id)
	}

	return (
		<EditScheduleItemContainer>
			<ActionButton isActive={isActive}>
				<button type="button" onClick={handleChangeActive}>
					{isActive ? 'ativo' : 'desativado'}
				</button>
			</ActionButton>
			<EditItemInfo>
				<span>{neighborhood}</span>
				<span>{start}</span>
				<span>{end}</span>
			</EditItemInfo>
		</EditScheduleItemContainer>
	)
}

export default EditScheduleItem
