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

export interface ComplaintRegistry {
	name: string
	neighborhood: string
	adress: string
	whatsapp: string
	description: string
	created_at: Date
	solved_at?: Date
}

export interface Complaint {
	id: string
	latitude: number
	longitude: number
	occurrences: number
	has_active_complaints: boolean
	created_at: Date
	updated_at: Date
	active: ComplaintRegistry[]
	solved: ComplaintRegistry[]
}
