const sleep = async (miliseconds = 1000): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, miliseconds))

export default sleep
