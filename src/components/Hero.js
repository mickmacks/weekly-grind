import React, {Component} from 'react'
import { firebase } from '../index.js'

class Hero extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
			link: "/signup"
    	}
    }

	render() {

		return(

			<div id="hero-signup">

	            	<div id="hero-signup-copy">
	            		<h1 id="intro">Weekly Grind is a community of  growing creative minds. No rules. No limits.</h1>
						<button id="primary-btn"><a href="/signup">SIGN UP</a></button>
					</div>

			</div>

		)
	}
}

export default Hero;
