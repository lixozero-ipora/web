import React from 'react'
import AOS from 'aos'
import { ToastContainer } from 'react-toastify'
import { HashRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'

import StyleGlobal from './styles/global'
import Routes from './routes'
import { AuthProvider } from './store/authContext'

AOS.init({
	once: true,
	delay: 150,
	duration: 700,
	easing: 'ease',
})

const App: React.FC = () => (
	<AuthProvider>
		<HashRouter>
			<Routes />
			<StyleGlobal />
		</HashRouter>
		<ToastContainer />
	</AuthProvider>
)

export default App
