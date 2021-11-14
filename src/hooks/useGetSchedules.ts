import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { ScheduleItem } from '../@types';
import api from '../services/api';
import sleep from '../utils/sleep';

const useGetSchedules = (): [ScheduleItem[], boolean] => {
	const [schedules, setSchedules] = useState<Array<ScheduleItem>>([]);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		getSchedules(3);
	}, []);

	const getSchedules = async (retryCount: number, currentTry = 1) => {
		try {
			await sleep(3000);
			const response = await api.get<Array<ScheduleItem>>('/schedules');

			setSchedules(response.data);
			setIsLoading(false);
		} catch (error) {
			if (currentTry < retryCount) {
				getSchedules(retryCount, currentTry + 1);
			} else {
				swal(
					'Ocorreu um erro',
					'As nossas máquinas não estão funcionando no momento, por favor, tente mais tarde.',
					'error'
				);
				setIsLoading(false);
			}
		}
	};

	return [schedules, loading];
};

export default useGetSchedules;
