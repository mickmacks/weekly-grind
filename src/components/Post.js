import React, {Component} from 'react'
import { firebase, fb } from "../index.js"

class Post extends Component {

	constructor(props) {

		super(props);
		this.state = {
			username: '',
			userImage: '',
			location: '',
			postId: '',
			postImage: ''
		};

		this.getUser = this.getUser.bind(this);
		this.deletePost = this.deletePost.bind(this);
		this.updatePost = this.updatePost.bind(this);

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
				userImage: currUserImage,
				postId: this.props.uniqueId,
				postImage: this.props.post.image

			});

		});

	}

	componentWillMount() {

		this.getUser()

	}	

	deletePost(e) {

		e.preventDefault();
		let targetPost = this.state;
		this.props.onPostDelete(targetPost)

	}

	updatePost(e) {

		e.preventDefault();
		let targetPost = this.state;
		this.props.onPostUpdate(targetPost)

	}

	render() {

		return(

			<div className="post-card"> 

				<div className="post-image">
					<div className="overlay">
      					<button className="card-btn" onClick={this.updatePost}>EDIT</button>
      					<button className="card-btn" onClick={this.deletePost}>DELETE</button>
					</div>
					<img className="post-image-bkg" src={this.props.post.image}></img>
				</div>
				
				<div className="post-info">
					<img className="post-info-profile" src={this.state.userImage} alt={this.state.username}/>
					<div className="post-info-user">
						<h3 className="post-info-username">{this.state.username}</h3>
						<h4 className="post-info-location">{this.state.location}</h4>
					</div>
					<h5 className="post-likes-count"><img src="http://i.imgur.com/tY4OQUk.png" /> {this.props.post.likesCount}</h5>
				</div>
				
			</div>
		)
	}
}

export default Post;

// var formattedDate = this.props.post.date.split("T")[0];
// 		var truncatedText = this.props.post.text.substring(0, 350) + '…';
// 		let postLink = `/cities/${this.props.post.city}/posts/${this.props.post._id}`
