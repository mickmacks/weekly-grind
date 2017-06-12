import React, {Component} from 'react'
import { firebase, fb } from "../index.js"

class Post extends Component {

	render() {

		let postUserId = this.props.post.user_id
		let ref = fb.ref().child('users')

		ref.orderByKey().limitToLast(1).on('value', function(snap) {
			console.log('value', snap.val());
		})

		return(

			<div className="postCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<img src={this.props.post.image}></img>
					<h3 className="postUser">{this.props.post.user_id}</h3>
				</div>
				<div className="postSection col-sm-12 col-md-12 col-lg-9">
					<h1 className="postTitle">{this.props.post.title}</h1>
					<p className="postText">{this.props.post.body}</p>
					<h5><a href="#">Read more…</a></h5>
					<h6 className="postDate">Posted on: {this.props.post.createdAt}</h6>

				</div>
			</div>
		)
	}
}

export default Post;

// var formattedDate = this.props.post.date.split("T")[0];
// 		var truncatedText = this.props.post.text.substring(0, 350) + '…';
// 		let postLink = `/cities/${this.props.post.city}/posts/${this.props.post._id}`
