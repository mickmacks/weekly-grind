import React, { Component } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import PopularPostsContainer from '../containers/PopularPostsContainer'
import Footer from '../components/Footer'

class Home extends Component {

  render() {
    return (
    <div>
    	<Nav />
    	<Hero />
    	<PopularPostsContainer />
		  <Footer />
	   </div>
    )
  }
}

export default Home;
