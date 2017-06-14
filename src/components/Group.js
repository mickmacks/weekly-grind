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

		// usersRef.orderByChild('_id').equalTo(userId).on("value", snap => {
			
		// 	let firstName = snap.val()[userId].firstName
		// 	let lastName = snap.val()[userId].lastName
		// 	let currFullName = firstName + " " + lastName

		// 	let currUserLocation = snap.val()[userId].location
		// 	let currUserImage = snap.val()[userId].userImage

		// 	this.setState({
		// 		username: currFullName,
		// 		location: currUserLocation, 
		// 		userImage: currUserImage
		// 	});

		// });

	}

	componentWillMount() {
		this.getUserGroups()
	}	

	render() {

		return(

			<div className="group-card">
				<div className="group-image">
					<img src={this.props.group.heroImage}></img>
				</div>
				<div className="group-info">
					<h3 className="group-info-name">{this.props.group.name}</h3>
					<p className="group-info-description">{this.props.group.description}</p>
					<h4 className="group-info-location">{this.props.group.location}</h4>
					<h5 className="group-info-users">Members: {this.props.group.users.length}</h5>
				</div>
			</div>
		)
	}
}

export default Group;
