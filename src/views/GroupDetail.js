import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'

class GroupDetail extends Component {
  
  render() {
    return (
    <div>
    	<Nav />
    	<PostsContainer />
		<Footer />
	   </div>
    )
  }
}

export default GroupDetail;
