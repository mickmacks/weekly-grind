import React, { Component } from 'react';
import Nav from '../components/Nav'
// import SignUp from '../components/SignUp'
import Footer from '../components/Footer'
import { auth, firebase, blah } from '../index.js'


class Home extends Component {
  render() {
    return (
    <div>
    	<h1>{blah}</h1>
    	<h1>hello</h1>
    	<Nav />
		<Footer />
	</div>
    )
  }
}

export default Home;
