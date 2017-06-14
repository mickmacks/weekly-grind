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

		usersRef.orderByChild('_id').equalTo(userId).on("value", snap => {
			
			let firstName = snap.val()[userId].firstName
			let lastName = snap.val()[userId].lastName
			let currFullName = firstName + " " + lastName

			let currUserLocation = snap.val()[userId].location
			let currUserImage = snap.val()[userId].userImage

			this.setState({
				username: currFullName,
				location: currUserLocation, 
				userImage: currUserImage
			});

		});

	}

	componentWillMount() {
		this.getUserGroups()
	}	

	render() {

		return(

			<div className="group-card">
				<div className="group-image">
					<img src={this.props.group.image}></img>
				</div>
				<div className="group-info">
					<img className="group-info-profile" src={this.state.userImage} alt={this.state.username}/>
					<div className="group-info-user">
						<h3 className="group-info-username">{this.state.username}</h3>
						<h4 className="group-info-location">{this.state.location}</h4>
					</div>
					<h5 className="group-likes-count"><img src="./images/heart.png" /> {this.props.group.likesCount}</h5>
				</div>
			</div>
		)
	}
}

export default Group;
