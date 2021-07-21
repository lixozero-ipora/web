import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import StyleGlobal from './styles/global'
import Routes from './routes'

function App() {
	return (
		<BrowserRouter>
			<Routes />
			<StyleGlobal />
		</BrowserRouter>
	)
}

export default App
