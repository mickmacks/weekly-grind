import React, {Component} from 'react'
import { fb, firebase, fbArray } from '../index.js'
import $ from 'jquery-ajax';

import PostsList from './PostsList'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import EditPostForm from '../components/EditPostForm'

class PostsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			title: 'Recent Posts',
			editPostId: ''
		};

		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
		this.handlePostEditSubmit = this.handlePostEditSubmit.bind(this);
		this.handlePostDelete = this.handlePostDelete.bind(this);
		this.handlePostUpdate = this.handlePostUpdate.bind(this);

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

		let postCount = 0

		const postsRef = fb.child('posts');

        // postsRef.child("posts").child(username).equalTo(username).once("value", function(snapshot) {
        // var userData = snapshot.val();
        //   if (!userData){

        var latestPost = postsRef.orderByChild('key').limitToLast(1)

		latestPost.once("value", function(snapshot) {
		  snapshot.forEach(function(child) {
		    console.log(child.key+": "+child.val());

			postCount = parseInt(child.key, 10) + 1

		  });
		});

		console.log(postCount)

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
          
	}

	handlePostDelete(targetPost){

		console.log("this.props is: ", this.props)
		console.log("targetPost is: ", targetPost)

		console.log("delete button worked!")

		const postsRef = fb.child('posts');
		postsRef.child(targetPost.postId).remove()

	}

    handlePostUpdate(targetPost) {

    	console.log("target post id is: ", targetPost.postId)
    	console.log("current value is : ", targetPost.postImage)

    	this.setState({ editPostId: targetPost.postId})

    	document.getElementById('new-post-form').style.display = 'none'
    	document.getElementById('edit-post-form').style.display = 'block'
    	// window.scrollTo(1000,document.body.scrollHeight)
    	window.location.href = "#edit-post-form"
    	document.getElementById('edit-post-value').value = targetPost.postImage

	  //   	const postsRef = fb.child('posts');
			// postsRef.child(targetPost.postId).set(targetPost)

	}

	handlePostEditSubmit(edittedPost) {

		console.log("edittedPost is: ", edittedPost)
		console.log("edittedPostId is: ", this.state.editPostId)

		const postsRef = fb.child('posts');
		postsRef.child(this.state.editPostId).child('image').set(edittedPost.image)

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
				<div id="new-post-form">
					<PostForm 
					onCreatePostFormSubmit={this.handleNewPostSubmit}					
					/>
				</div>
				<div id="edit-post-form">
					<EditPostForm 
					onEditPostFormSubmit={this.handlePostEditSubmit}					
					/>
				</div>

       		</div>
		)
	}
}

export default PostsContainer;

// <button id="secondary-btn"><a href="/signup">NEW POST</a></button>

