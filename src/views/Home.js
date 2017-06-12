import React, { Component } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { auth, firebase } from '../index.js'


class Home extends Component {
  render() {
    return (
    <div>
    	<Nav />
    	<Hero />
		<Footer />
	</div>
    )
  }
}

export default Home;
