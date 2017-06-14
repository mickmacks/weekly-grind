import React, { Component } from 'react';
import Nav from '../components/Nav'
import GroupHeader from '../components/GroupHeader'
import GroupsContainer from '../containers/GroupsContainer'
import Footer from '../components/Footer'

class Groups extends Component {
  render() {
    return (
    <div>
    	<Nav />
    	<GroupHeader />
    	<GroupsContainer />
		  <Footer />
    </div>
    )
  }
}

export default Groups;
