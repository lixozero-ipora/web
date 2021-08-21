import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import Landing from '../pages/Landing'
import Schedule from '../pages/Schedule'
import Complaint from '../pages/Complaint'
import About from '../pages/About'
import Admin from '../pages/Admin'
import Route from './Route'
import EditSchedule from '../pages/EditSchedule'
import ComplaintsView from '../pages/ComplaintsView'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact Component={<Landing />} />
		<Route path="/datas" Component={<Schedule />} />
		<Route path="/denuncia" Component={<Complaint />} />
		<Route path="/sobre" Component={<About />} />
		<Route path="/admin" Component={<Admin />} />
		<Route path="/gerenciar-datas" Component={<EditSchedule />} isPrivate />
		<Route
			path="/gerenciar-reclamacoes"
			Component={<ComplaintsView />}
			isPrivate
		/>

		<Route path="*" Component={<Redirect to="/" />} />
	</Switch>
)

export default Routes
