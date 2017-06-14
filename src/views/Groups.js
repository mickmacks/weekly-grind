import React, { Component } from 'react';
import Nav from '../components/Nav'
import GroupsContainer from '../containers/GroupsContainer'
import Footer from '../components/Footer'

class Groups extends Component {
  render() {
    return (
    <div>
    	<Nav />
    	<GroupsContainer />
		  <Footer />
    </div>
    )
  }
}

export default Groups;
