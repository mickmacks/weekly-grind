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
					
					<section id="hero-scroll" className="scroll">
	            		<a href="#"><span></span><h5>Scroll</h5></a>
	            	</section>

			</div>

		)
	}
}

export default Hero;
