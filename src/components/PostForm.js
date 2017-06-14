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
    let user = this.state.user.trim();
    let occupation = this.state.occupation.trim();
    let text = this.state.text.trim();
    let date = this.state.date;
    let userID = this.state.userID.trim();




    if (!image || !user || !occupation || !text || !date || !userID ) {
      return;
    }
    this.props.onModalFormSubmit(
    {	image: image,
    	user: user,
    	occupation: occupation,
    	text: text,
      date: Date,
      userID: userID,
    });
    this.setState(
    {	image: image,
    	user: user,
    	occupation: occupation,
    	text: text,
      date: Date,
      userID: userID,
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
	          type='text'
	          name='lastName'
	          placeholder='Enter your last name…'
	          value={ this.state.user }
	          onChange={ this.handleInputChange } />
	        <input
	          type='text'
	          name='occupation'
	          placeholder='Choose a occupation…'
	          value={ this.state.occupation }
	          onChange={ this.handleInputChange } />
	        <input
	          type='text'
	          name='text'
	          placeholder='Write your Post.....'
	          value={ this.state.text }
	          onChange={ this.handleInputChange } />
          <input
            type='hidden'
            name='date'
            value={Date.now()} />
	        <input
	          type='text'
	          name='userID'
	          placeholder='firebase userID'
	          value={ this.state.userID}
	          onChange={ this.handleInputChange } />
          <input
            type='hidden'
            name='city'
            value={ this.props.city } />
	        <input
            className='submit-button'
	          type='submit'
	          value='Post' />
	     </form>
      </div>
    )
  }
}

export default PostForm;
