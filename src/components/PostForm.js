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

  }


  handleNewPostSubmit(e) {

    e.preventDefault();
    let image = this.state.image.trim();

    if (!image) {
      return;
    }
    this.props.onCreatePostFormSubmit(
    {	image: image
    });
    this.setState(
    {	image: ""
    });

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
