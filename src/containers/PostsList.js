import React, {Component} from 'react'
import Post from '../components/Post'

class PostsList extends Component {

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

			<div className="postsList container">
				<h1 className="cityTitle center">{this.props.cityName}</h1>

				<div className="row">
					{postsArray}
				</div>
			</div>
		)
	}
}

export default PostsList;
