import React from 'react'
import { HashRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
	</AuthProvider>
)

export default App
