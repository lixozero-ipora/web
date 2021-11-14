import React from 'react';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
import { HashRouter } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import StyleGlobal from './styles/global';
import Routes from './routes';
import { AuthProvider } from './store/authContext';
import { SugestionOrProblem } from './components/SugestionOrProblem';

AOS.init({
	once: true,
	delay: 150,
	duration: 700,
	easing: 'ease',
});

const App: React.FC = () => (
	<>
		<SugestionOrProblem />
		<AuthProvider>
			<HashRouter>
				<Routes />
				<StyleGlobal />
			</HashRouter>
			<ToastContainer />
		</AuthProvider>
	</>
);

export default App;
