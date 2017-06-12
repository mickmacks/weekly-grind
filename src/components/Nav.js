import React, {Component} from 'react'
import { auth, firebase, blah } from '../index.js'

// import { Link } from 'react-router-dom'
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loggedIn: false
    }
    this.loginButtonClicked = this.loginButtonClicked.bind(this)
    this.logoutButtonClicked = this.logoutButtonClicked.bind(this)

  }
  
  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
        // currentUserData=currentUser;
        // console.log(currentUserData);
        console.log(this.state, "logging");
      } else {
        this.setState({ currentUser: null });
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
    document.getElementById('login').style.visibility = 'hidden' 
    document.getElementById('logout').style.visibility = 'visible'

  }

  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();
    document.getElementById('logout').style.visibility = 'hidden'
    document.getElementById('login').style.visibility = 'visible' 

  }

  render() {
    return(

      <nav>
        <a href="http://localhost:3001"><h4>WeeklyGrind</h4></a>

        <ul>

          <li id="login">
            <a onClick={this.loginButtonClicked}>
              Login
            </a>
          </li>

          <li id="logout">
            <a onClick={this.logoutButtonClicked}>
              Logout
            </a>
          </li>

          <li id="userName">{this.state.currentUser && this.state.currentUser.displayName}</li>


        </ul>
      </nav>

    )
  }
}

export default Nav;
