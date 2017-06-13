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
						<p>Wayfarer is an a travel review application based in the United States.<br></br> Currently, cities available for review are: San Francisco, Los Angeles, New York. <br></br>For requests to add other cities, please contact us and we will look into it!<br></br>Etc etc etc etc etc blah blah.</p>
					</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
