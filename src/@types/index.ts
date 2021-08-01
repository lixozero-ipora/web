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

interface Citizen {
	name: string
	adress: string
	whatsapp: string
	description: string
	created_at: string
}

export interface Complaint {
	id: string
	latitude: number
	longitude: number
	occurrences: number
	created_at: string
	updated_at: string
	citizens: Citizen[]
}
