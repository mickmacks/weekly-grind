import React from 'react'
import {Route, browserHistory} from 'react-router'
import Home from '../views/Home'
import SignUp from '../views/SignUp'
import Profile from '../views/Profile'
import Groups from '../views/Groups'
import GroupDetail from '../views/GroupDetail'

var ReactRoutes = (
	<div>
  		<Route path='/' component={Home} />
  		<Route path='/signup' component={SignUp} />
  		<Route path='/user/:username' component={Profile} />
  		<Route path='/user/:username/groups' component={Groups} />
  		<Route path='/user/:username/groups/:groupname' component={GroupDetail} />

	</div>
)

export default ReactRoutes