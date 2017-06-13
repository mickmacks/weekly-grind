import React, {Component} from 'react'
import Post from '../components/Post'

class PostsList extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	
	componentDidUpdate() {

		console.log("this.props is:", this.props.groupname)

		if (this.props.groupname !== '') {

		console.log(document.getElementsByClassName('posts-list-title'))

		document.getElementsByClassName('posts-list-title').innerHTML = this.props.groupname + "'s Posts"

		}

	}	

	render() {

		let postsArray = this.props.posts.map( (post) => {

			return (
				<Post
					key={[post._id]}
					uniqueId={[post._id]}
					post={post}
					className="postCard" />
			)
		})

		return(

			<div className="posts-list-container">
				<h1 className="posts-list-title">Popular Posts</h1>

				<div className="posts-list-items">
					{postsArray}
				</div>
			</div>
		)
	}
}

export default PostsList;
