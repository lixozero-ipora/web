import swal from 'sweetalert'

const alreadyComplainedCheck = (): void => {
	const complainedKey = localStorage.getItem('@complained')
	if (complainedKey) {
		const complained = JSON.parse(complainedKey)

		const complainedDate = new Date(complained.date)
		// Day that the person complained + 3 days
		if (complainedDate.getTime() + 60 * 3600 * 72 > Date.now()) {
			swal(
				'Parece que você já reclamou',
				'Tente novamente após três dias da última reclamação.',
				'error'
			)
		}
	}
}

export default alreadyComplainedCheck
