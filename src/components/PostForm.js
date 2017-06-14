import React, {Component} from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      image: '',
      title: '',
      body: '',
      createdAt: Date,
      updatedAt: '',
      groupname: '',
      likesCount: '1',
      likedBy: []

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
  }

  handleInputChange(e) {

  	if (e.target.name === 'image') {
  		this.setState({ image: e.target.value });
  	}

  	if (e.target.name === 'user') {
  		this.setState({ user: e.target.value });
  	}

  	if (e.target.name === 'occupation') {
  		this.setState({ occupation: e.target.value });
  	}

  	if (e.target.name === 'text') {
  		this.setState({ text: e.target.value });
  	}

  	if (e.target.name === 'date') {
  		this.setState({ date: e.target.value });
    }
      if (e.target.name === 'userID') {
      this.setState({ userID: e.target.value });
    }

  }


  handleNewPostSubmit(e) {

    e.preventDefault();
    //we will be tying this into the POST method in a bit
    let image = this.state.image.trim();
    // let user = this.state.user.trim();
    // let occupation = this.state.occupation.trim();
    // let text = this.state.text.trim();
    // let date = this.state.date;
    // let userID = this.state.userID.trim();


    // if (!image || !user || !occupation || !text || !date || !userID )

    if (!image) {
      return;
    }
    this.props.onCreatePostFormSubmit(
    {	image: image
    });
    this.setState(
    {	image: image
    });

    console.log('logging this.state: ', this.state);
  }

  render() {
    return (

	    <div className="form-container">
  
        <form onSubmit={ this.handleNewPostSubmit }>
	        <input
	          type='text'
	          name='image'
	          placeholder='Enter Image Link…'
	          value={ this.state.image }
	          onChange={ this.handleInputChange } />
	        <input
            className='submit-button'
	          type='submit'
	          value='Create Post' />
	     </form>
      </div>
    )
  }
}

export default PostForm;
