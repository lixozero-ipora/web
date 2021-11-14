import { ScheduleItem } from '../@types';

export const sortSchedule = (a: ScheduleItem, b: ScheduleItem): number => {
	if (a.neighborhood > b.neighborhood) {
		return 1;
	}
	if (a.neighborhood < b.neighborhood) {
		return -1;
	}

	return 0;
};
