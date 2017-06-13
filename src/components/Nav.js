import React, {Component} from 'react'
import { auth, firebase } from '../index.js'

// import { Link } from 'react-router-dom'
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currUserName: null,
      currUserImage: '',
      loggedIn: false
    }
    this.loginButtonClicked = this.loginButtonClicked.bind(this)
    this.logoutButtonClicked = this.logoutButtonClicked.bind(this)

  }
  
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {

        this.setState({ 
          currUserName: currentUser.displayName,
          currUserImage: currentUser.photoURL
         });
        document.getElementById('userImage').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'inline-block'
        document.getElementById('login').style.display = 'none'

      } else {
        this.setState({ 
          currUserName: null,
          currUserImage: '' });
        document.getElementById('userImage').style.display = 'none'
        document.getElementById('login').style.display = 'inline-block' 
        document.getElementById('logout').style.display = 'none'
      }

    })
  }

  loginButtonClicked(e) {
    e.preventDefault();
    // set up provider
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    // tell Firebase auth to log in with a popup and that provider
    auth.signInWithPopup(provider);


  }

  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();
  }

  render() {
    return(

      <nav className="nav-down">
        <a href="http://localhost:3000"><h4>WeeklyGrind</h4></a>
       
        <div id="authentication">    
         <button id="login" onClick={this.loginButtonClicked}>Login</button>
         <button id="logout" onClick={this.logoutButtonClicked}>Logout</button>
         <img id="userImage" src={this.state.currUserImage} />
        </div> 
      </nav>

    )
  }
}

export default Nav;
