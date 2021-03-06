import React, {Component} from 'react'
import { firebase, fb } from "../index.js"

class Group extends Component {

	constructor(props) {

		super(props);
		this.state = {
			username: '',
			userImage: '',
			location: ''
		};

		this.getUserGroups = this.getUserGroups.bind(this);

	}

	getUserGroups() {

		let usersRef = fb.child('users');
		let userId = this.props.group.user_id

	}

	render() {

		var groupname = this.props.group.name.toLowerCase().replace(/\s+/g, '')
		var groupURL = window.location.href + "/" + groupname

		return(

			<div className="group-card">
				<div className="group-image">
					<img src={this.props.group.heroImage}></img>
				</div>
				<div className="group-info">
					<a href={groupURL}><h3 className="group-info-name">{this.props.group.name}</h3></a>
					<p className="group-info-description">{this.props.group.description}</p>
					<h4 className="group-info-location">{this.props.group.location}</h4>
					<h5 className="group-info-users">Members: {this.props.group.users.length}</h5>
				</div>
			</div>
		)
	}
}

export default Group;
