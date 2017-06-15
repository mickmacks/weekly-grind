import React, {Component} from 'react'
import Group from '../components/Group'

class GroupsList extends Component {

	constructor(props) {

		super(props);
		this.state = {};

	}
	
	componentDidUpdate() {

		if (this.props.groupname !== '') {
			document.getElementsByClassName('groups-list-title').innerHTML = this.props.groupname + "'s Posts"
		}

	}	

	render() {

		// Create array of Group React Components

		let groupsArray = this.props.groups.map( (group) => {

			return (

				<Group
					key={group._id}
					uniqueId={group._id}
					group={group}
					className="groupCard" />

			)

		})

		// Render Group Components in a List

		return(

			<div className="groups-list-container">

				<h1 className="groups-list-title">My Groups</h1>
				<div className="groups-list-items">
					{groupsArray}
				</div>
				
			</div>
		)
	}
}

export default GroupsList;
