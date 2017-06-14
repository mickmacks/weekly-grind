import React, { Component } from 'react';
import Nav from '../components/Nav'
import SignUpForm from '../components/SignUpForm'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'

class SignUp extends Component {
  render() {
    return (
    <div>
    	<Nav />
    	<SignUpForm />
		<Footer />
    </div>
    )
  }
}

export default SignUp;
