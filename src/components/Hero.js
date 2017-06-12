import React, {Component} from 'react'

class Hero extends Component {
	constructor() {
		super();
		this.state = {
			backgroundURL: ''
		}
	}

	render() {

		return(

			<div id="hero-signup">

	            	<h1>Weekly Grind is a community of  growing creative minds. No rules,  no limitations.</h1>

	            	<button>GET STARTED</button>

			</div>

		)
	}
}

export default Hero;
