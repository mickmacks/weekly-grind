import React, {Component} from 'react'
import { fb, firebase } from '../index.js'
import $ from 'jquery-ajax';

import PostsList from './PostsList'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

let postCount = 7

class PostsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			title: 'Recent Posts'
		};

		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
		// this.handlePostSubmit = this.handlePostSubmit.bind(this);
	// 	// this.handlePostDelete = this.handlePosttDelete.bind(this);
	// 	// this.handlePostUpdate = this.handlePostUpdate.bind(this);

	}

	loadPostsFromServer(){

	    const postsRef = fb.child('posts');
	    console.log('posts from postscontainer is:', postsRef)
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

		const postsRef = fb.child('posts');

        // postsRef.child("posts").child(username).equalTo(username).once("value", function(snapshot) {
        // var userData = snapshot.val();
        //   if (!userData){

		firebase.database().ref('posts/' + postCount).set({
			_id: "00" + postCount,
			user_id: "00000007",
			group_id: "00010001",
			title: "Taco Time",
			body: "Let's get some god damn tacos",
			image: post.image,
			likesCount: 1,
			likedBy: ["00000004"],
			createdAt: "23rd June 2017, 10:11:15 AM",
			updatedAt: "23rd June 2017, 10:12:14 AM"
		  });

		postCount++
          
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
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<PostsList
					posts={this.state.posts}
					title={this.state.title}
					onPostDelete={this.handlePostDelete}
					onPostUpdate={this.handlePostUpdate}
				/>
				<div className="posts-form-container">
					<PostForm 
					onCreatePostFormSubmit={this.handleNewPostSubmit}					
					/>
				</div>

       		</div>
		)
	}
}

export default PostsContainer;

// <button id="secondary-btn"><a href="/signup">NEW POST</a></button>

