import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Landing from '../pages/Landing'
import Schedule from '../pages/Schedule'
import Complaint from '../pages/Complaint'
import About from '../pages/About'
import Admin from '../pages/Admin'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact>
			<Landing />
		</Route>
		<Route path="/horarios">
			<Schedule />
		</Route>
		<Route path="/denuncia">
			<Complaint />
		</Route>
		<Route path="/sobre">
			<About />
		</Route>
		<Route path="/admin">
			<Admin />
		</Route>
		<Route path="*">
			<Redirect to="/" />
		</Route>
	</Switch>
)

export default Routes
