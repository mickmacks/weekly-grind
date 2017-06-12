import React, {Component} from 'react'
import { auth, firebase, blah } from '../index.js'

// import { Link } from 'react-router-dom'
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Home',
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

  }

  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();
  }

  render() {
    return(

      <nav>
        <div className="container-fluid">

        <a href="http://localhost:3001" className="navbar-brand"><h4>WeeklyGrind</h4></a>

        <ul className="nav navbar-nav navbar-right">

          <li id="userName">{this.state.currentUser && this.state.currentUser.displayName}</li>

          <li>
            <a onClick={this.loginButtonClicked}>
              <span className="glyphicon glyphicon-log-in"></span> 
              Login
            </a>
          </li>

          <li>
            <a onClick={this.logoutButtonClicked}>
              <span className="glyphicon glyphicon-log-out" ></span> 
              Logout
            </a>
          </li>

        </ul>

        </div>
      </nav>

    )
  }
}

export default Nav;
