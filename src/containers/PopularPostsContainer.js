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
	// 	this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
	// 	//this.handlePostSubmit = this.handlePostSubmit.bind(this);
	// 	// this.handlePostDelete = this.handlePosttDelete.bind(this);
	// 	// this.handlePostUpdate = this.handlePostUpdate.bind(this);

	}

	loadPostsFromServer(){

	    const postsRef = fb.child('posts');
	    console.log('posts from Popularpostscontainer is:', postsRef)
	    // 'on' method synchronizes data in real time
	    // attach it onto a reference that points to a place in the database
	    // so when the database makes a change, make that update to our react state in real time
	    postsRef.on('value', snap => {
	        this.setState({
	          posts: snap.val()
	        })
	    })

  	}

	handleNewPostSubmit(post){

		// post.city = this.props.routeParams.cityId;

		// console.log('reached handleNewPostSubmit');
		// let posts = this.state.posts;
		// console.log('posts is: ', posts);
		// let newPost = posts.concat([post]);
		// console.log('newPost is: ', newPost)
		// this.setState({posts: newPost});
		// // use this once posts' data route is confirmed
		// //url: 'http://localhost:3000/api/cities/:cityId/posts'

		// $.ajax({
		// 	method: 'POST',
		// 	url: `http://localhost:3000/api/cities/${this.props.routeParams.cityId}/posts/`,
		// 	data: post
		// })
		// .then(res => {
		// 	console.log('res is: ', res)
		// }, err => {
		// 	console.error(err);
		// 	this.setState({posts: posts});
		// });
	}

	handlePostDelete(id){
	 //    $.ajax({
	 //      method: 'DELETE',
	 //      url: 'http://localhost:3000/api/cities/:cityId/posts/:postId'

	//     })
	//     .then((res) => {
	//       console.log('Post deleted');
	//     }, (err) => {
	//       console.error(err);
	//     });
	}

    handlePostUpdate(id, post) {
    //sends the posts id and new text to our api
    // $.ajax({
    //   method: 'PUT',
    //   url:'http://localhost:3000/api/cities/:cityId/posts/:postId' ,
    //   data: post
    // })
    // .then(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    // setInterval(this.loadPostsFromServer, this.props.pollInterval);
  }


	render() {

		// const testPost = this.state.posts[0]

		// console.log('targetPost is: ', testPost)

		return(

			<div className="posts-container-main">	
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
