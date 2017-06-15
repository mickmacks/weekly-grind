import React, {Component} from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      date: Date,
      userID: '',
      city: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
  }

  //test change

  handleInputChange(e) {

  	if (e.target.name === 'firstName') {
  		this.setState({ firstName: e.target.value });
  	}

  	if (e.target.name === 'lastName') {
  		this.setState({ lastName: e.target.value });
  	}

  	if (e.target.name === 'password') {
  		this.setState({ password: e.target.value });
  	}

  	if (e.target.name === 'email') {
  		this.setState({ email: e.target.value });
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
    let firstName = this.state.firstName.trim();
    let lastName = this.state.lastName.trim();
    let password = this.state.password.trim();
    let email = this.state.email.trim();
    let date = this.state.date;
    let userID = this.state.userID.trim();




    if (!firstName || !lastName || !password || !email || !date || !userID ) {
      return;
    }
    this.props.onModalFormSubmit(
    {	firstName: firstName,
    	lastName: lastName,
    	password: password,
    	email: email,
      date: Date,
      userID: userID,
    });
    this.setState(
    {	firstName: firstName,
    	lastName: lastName,
    	password: password,
    	email: email,
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
	          name='firstName'
	          placeholder='Enter your first name…'
	          value={ this.state.firstName }
	          onChange={ this.handleInputChange } />
	        <input
	          type='text'
	          name='lastName'
	          placeholder='Enter your last name…'
	          value={ this.state.lastName }
	          onChange={ this.handleInputChange } />
          <input
            type='text'
            name='email'
            placeholder='Enter your email…'
            value={ this.state.email }
            onChange={ this.handleInputChange } />
	        <input
	          type='password'
	          name='password'
	          placeholder='Choose a password…'
	          value={ this.state.password }
	          onChange={ this.handleInputChange } />
          <input
            type='hidden'
            name='date'
            value={Date.now()} />
	        <input
	          type='password'
	          name='passwordconfirm'
	          placeholder='Confirm password…'
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

export default SignUpForm;
