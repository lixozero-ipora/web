import React from 'react'
import { HashRouter } from 'react-router-dom'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import StyleGlobal from './styles/global'
import Routes from './routes'
import 'leaflet/dist/leaflet.css'

const App: React.FC = () => (
	<HashRouter basename={process.env.PUBLIC_URL}>
		<Routes />
		<StyleGlobal />
	</HashRouter>
)

export default App
