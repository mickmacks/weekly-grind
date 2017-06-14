import React, {Component} from 'react'
import { firebase } from '../index.js'

class Hero extends Component {

	render() {

		return(

			<div id="hero-signup">

	            	<div id="hero-signup-copy">
	            		<h1 id="intro">Weekly Grind is a community of  growing creative minds. No rules. No limits.</h1>
						<button id="hero-signup-btn">SIGN UP</button>
					</div>

			</div>

		)
	}
}

export default Hero;
