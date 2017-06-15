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
		this.handlePostDelete = this.handlePostDelete.bind(this);
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


		const postsRef = fb.child('posts');

        // postsRef.child("posts").child(username).equalTo(username).once("value", function(snapshot) {
        // var userData = snapshot.val();
        //   if (!userData){

		firebase.database().ref('posts/' + postCount).set({
			_id: "" + postCount,
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

	handlePostDelete(targetPost){

		console.log("this.props is: ", this.props)
		console.log("targetPost is: ", targetPost)

		console.log("delete button worked!")

		const postsRef = fb.child('posts');
		postsRef.child(targetPost.postId).remove()
		// couldn't move this to global variable


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

