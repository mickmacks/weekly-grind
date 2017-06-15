import React, {Component} from 'react'
import { fb } from '../index.js'
import $ from 'jquery-ajax';

import GroupsList from './GroupsList'
import Group from '../components/Group'


class GroupsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			groups: [],
		};



		this.loadGroupsFromServer = this.loadGroupsFromServer.bind(this);
	}

	loadGroupsFromServer(){

	    const groupsRef = fb.child('groups');

	    groupsRef.on('value', snap => {
	        this.setState({
	          groups: snap.val()
	        })
	    })

	    console.log(this.state.groups)

  	}

	handleNewGroupSubmit(group){

		// New Group Submission to Firebase

	}

	handleGroupDelete(id){

		// Delete Group from Firebase

	}

    handleGroupUpdate(id, group) {

		// Update Group on Firebase  

	}

	componentDidMount() {

	this.loadGroupsFromServer();

	}

	// TODO: Add CreateGroupForm underneath GroupsList component

	render() {

		return(

			<div className="groups-container-main">	
				<GroupsList
					groups={this.state.groups}
					onGroupDelete={this.handleGroupDelete}
					onGroupUpdate={this.handleGroupUpdate}/>
       		</div>

		)
	}
}

export default GroupsContainer;
