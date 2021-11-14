import { useEffect } from 'react';

const useScrollTop = (): void => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
};

export default useScrollTop;
