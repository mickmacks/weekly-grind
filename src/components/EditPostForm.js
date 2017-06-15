import React, {Component} from 'react'

class EditPostForm extends Component {

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
    this.handleEditPostSubmit = this.handleEditPostSubmit.bind(this);
  
  }


  handleInputChange(e) {

  	if (e.target.name === 'image') {
  		this.setState({ image: e.target.value });
  	}

  }


  handleEditPostSubmit(e) {

    e.preventDefault();
    let image = this.state.image.trim();

    if (!image) {
      return;
    }

    this.props.onEditPostFormSubmit(
    {	image: image
    });

    this.setState(
    {	image: ""
    });

  }

  render() {

    return (

	    <div id="edit-form-container" className="form-container">
  
        <form onSubmit={ this.handleEditPostSubmit }>
	        <input id="edit-post-value"
	          type='text'
	          name='image'
	          placeholder={this.props.targetImageUrl}
	          value={ this.state.image }
	          onChange={ this.handleInputChange } />
	        <input
            className='submit-button'
	          type='submit'
	          value='Save Changes' />
        </form>

      </div>

    )
  }
}

export default EditPostForm;
