const addZeroInDate = (number: number): string | number =>
	number < 10 ? `0${number}` : number

export default addZeroInDate
