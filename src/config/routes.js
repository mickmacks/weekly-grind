import React from 'react'
import {Route} from 'react-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
import Groups from '../views/Groups'
import GroupDetail from '../views/GroupDetail'
import PostDetail from '../views/PostDetail'


var ReactRoutes = (
	<div>
  		<Route path='/' component={Home} />

  		<Route path='/username' component={Profile} />

  		<Route path='/groups' component={Groups} />
  		<Route path='/groups/group_name' component={GroupDetail} />

	</div>
)

export default ReactRoutes

// <Route path='/username/settings/' component={ProfileSettings} />
// <Route path='/username/posts/' component={ProfilePosts} />
// <Route path='/groups/group_name/:post_title' component={PostDetail} />