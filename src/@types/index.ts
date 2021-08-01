export interface ScheduleItem {
	id: string
	neighborhood: string
	start: string
	end: string
	created_at: Date
	updated_at: Date
}

export interface EditingSchedule {
	editing: string[]
	items: ScheduleItem[]
}
