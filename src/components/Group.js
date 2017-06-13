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

		this.getUser = this.getUser.bind(this);
	}

	getUser() {

		let usersRef = fb.child('users');
		let userId = this.props.post.user_id

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
		this.getUser()
	}	

	render() {

		return(

			<div className="post-card">
				<div className="post-image">
					<img src={this.props.post.image}></img>
				</div>
				<div className="post-info">
					<img className="post-info-profile" src={this.state.userImage} alt={this.state.username}/>
					<div className="post-info-user">
						<h3 className="post-info-username">{this.state.username}</h3>
						<h4 className="post-info-location">{this.state.location}</h4>
					</div>
					<h5 className="post-likes-count"><img src="./images/heart.png" /> {this.props.post.likesCount}</h5>
				</div>
			</div>
		)
	}
}

export default Group;
