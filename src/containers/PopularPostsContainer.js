import React, {Component} from 'react'
import { fb } from '../index.js'
import $ from 'jquery-ajax';

import PostsList from './PostsList'
import Post from '../components/Post'

class PopularPostsContainer extends Component {

	constructor(props) {

		super(props);
		this.state = {
			posts: [],
			title: 'Popular Posts'
		};

		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);

	}

	loadPostsFromServer(){

	    const popPostsRef = fb.child('posts').limitToFirst(6);

	    // TODO: Change returning first 6 to orderby likesCount and then limit to first 6.

	    popPostsRef.on('value', snap => {

	        this.setState({
	          posts: snap.val()
	        })

	    })

  	}

	componentDidMount() {

		this.loadPostsFromServer();

	}


	render() {

		return(

			<div id="popular-posts" className="posts-container-main">	
				<PostsList
					posts={this.state.posts}
					title={this.state.title}
					onPostDelete={this.handlePostDelete}
					onPostUpdate={this.handlePostUpdate}/>
       		</div>
		)
	}
}

export default PopularPostsContainer;
