export interface ScheduleItem {
	id: string
	neighborhood: string
	start: string
	end: string
	created_at: Date
	updated_at: Date
}

export interface EditSchedule extends ScheduleItem {
	isActive: boolean
}

export interface EditingSchedule {
	editing: string[]
	items: EditSchedule[]
}
