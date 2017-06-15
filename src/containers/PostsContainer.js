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
			editPostId: '',
			editPostPlaceholder: ''
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

		let currLastIndex;

		const postsRef = fb.child('posts');

        // postsRef.child("posts").child(username).equalTo(username).once("value", function(snapshot) {
        // var userData = snapshot.val();
        //   if (!userData){

        var latestPost = postsRef.orderByChild('key').limitToLast(1)

		latestPost.once("value", function(snapshot) {
		  snapshot.forEach(function(child) {
		    console.log(child.key+": "+child.val());

			currLastIndex = parseInt(child.key, 10) + 1

		  });
		});

		console.log(currLastIndex)

		firebase.database().ref('posts/' + currLastIndex).set({
			_id: "" + currLastIndex,
			user_id: "00000007",
			group_id: "00010001",
			title: "",
			body: "",
			image: post.image,
			likesCount: 1,
			likedBy: ["00000004"],
			createdAt: "23rd June 2017, 10:11:15 AM",
			updatedAt: ""
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

    	document.getElementById('new-post-form').style.display = 'none'
    	document.getElementById('edit-post-form').style.display = 'block'
    	window.location.href = "#edit-post-form"
    	document.getElementById('edit-post-value').value = targetPost.postImage

    	// TODO: why is the preventing the DOM change above from happening?
    	this.setState({ 
    		editPostId: targetPost.postId,
    		editPostPlaceholder: targetPost.postImage
    	})

	}

	handlePostEditSubmit(edittedPost) {

		console.log("edittedPost is: ", edittedPost)
		console.log("edittedPostId is: ", this.state.editPostId)

		const postsRef = fb.child('posts');
		postsRef.child(this.state.editPostId).child('image').set(edittedPost.image)

		document.getElementById('new-post-form').style.display = 'block'
    	document.getElementById('edit-post-form').style.display = 'none'

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
					targetImageUrl={this.state.editPostPlaceholder}
					onEditPostFormSubmit={this.handlePostEditSubmit}					
					/>
				</div>

       		</div>
		)
	}
}

export default PostsContainer;

// <button id="secondary-btn"><a href="/signup">NEW POST</a></button>

