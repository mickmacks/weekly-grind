import React, {Component} from 'react'
import Group from '../components/Group'

class GroupsList extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	
	componentDidUpdate() {

		console.log("this.props is:", this.props.groupname)
		if (this.props.groupname !== '') {

			console.log(document.getElementsByClassName('groups-list-title'))
			document.getElementsByClassName('groups-list-title').innerHTML = this.props.groupname + "'s Posts"

		}

	}	

	render() {

		console.log("this.props.group is: ", this.props.group )

		let groupsArray = this.props.groups.map( (group) => {

			return (
				<Group
					key={group._id}
					uniqueId={group._id}
					group={group}
					className="groupCard" />
			)
		})

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
