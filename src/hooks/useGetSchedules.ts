import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { ScheduleItem } from '../@types'
import api from '../services/api'

const useGetSchedules = (): [ScheduleItem[], boolean] => {
	const [schedules, setSchedules] = useState<Array<ScheduleItem>>([])
	const [loading, setIsLoading] = useState(true)

	useEffect(() => {
		getSchedules()
	}, [])

	const getSchedules = async () => {
		try {
			const response = await api.get<Array<ScheduleItem>>('/schedules')

			setSchedules(response.data)
		} catch (error) {
			swal(
				'Ocorreu um erro',
				'As nossas máquinas não estão funcionando no momento, por favor, tente mais tarde.',
				'error'
			)
		} finally {
			setIsLoading(false)
		}
	}

	return [schedules, loading]
}

export default useGetSchedules
