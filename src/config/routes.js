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

  		<Route path='/:user_name' component={Profile} />

  		<Route path='/groups' component={Groups} />
  		<Route path='/groups/:groupname' component={GroupDetail} />

  		<Route path='/groups/:groupname/:posttitle' component={PostDetail} />
	</div>
)

export default ReactRoutes

// get :uid from nav bar (firebase)
// add :uid to to user route path

// <Route path='/user' component={ProfilePage} />
// <Route path='/cities/:cityId' component={CityPostPage}/>
// <Route path='/cities/:cityId/posts/:postId' component={PostPage}/>
