import React, {Component} from 'react'

class Footer extends Component {

	render() {

		return(

			<footer>
				<div id="footer">
					<ul id="footer-list">
						<li><a href="http:localhost:3000">About</a></li><br></br>
						<li><a href="http:localhost:3000">Contact Us</a></li><br></br>
						<li><a href="http:localhost:3000">Other Page</a></li><br></br>
						<li>© 2017 Mahmoud Bachir</li>
					</ul>
					<div id="footer-blurb">
						<p>Welcome to the Weekly Grind! We are an international community of thousands, helping eachother to develop and grow in small pockets. Create a private group, or join a public one near you. Learn, develop and share your experiences with your friends and peers — and all for free!</p>
					</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
