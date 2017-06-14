import React, {Component} from 'react'
import { auth, firebase, fb } from '../index.js'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currUserName: '',
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
          currentUser: currentUser,
          currUserName: currentUser.displayName,
          currUserImage: currentUser.photoURL
         });

        // var newPassword = getASecureRandomPassword()

        const usersRef = fb.child('users');
        let username = this.state.currUserName.toLowerCase().replace(/\s+/g, '')

        usersRef.child("users").child(username).equalTo(username).once("value", function(snapshot) {
        var userData = snapshot.val();
          if (!userData){

            usersRef.child(username).set({
                  
                    uid: currentUser.uid,
                    email: currentUser.email,
                    name: currentUser.displayName,
                    location: 'San Francisco, CA',
                    password: 'password',
                    userImage: currentUser.photoURL,
                    groups: []

            })
          }
        });

        document.getElementById('userImage').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'inline-block';
        document.getElementById('login').style.display = 'none';

      } else {

        this.setState({ 
          currUserName: null,
          currUserImage: null 
        });

        document.getElementById('userImage').style.display = 'none';
        document.getElementById('login').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'none';
        
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

    let welcomeMessage = "Weekly Grind is a community for growing creative minds. No rules, no limits."

    document.getElementById('intro').innerHTML = welcomeMessage;
    document.getElementById('hero-signup-btn').innerHTML = 'Sign Up';
  }

  render() {

      if (this.state.currUser) {

        return(

          <nav className="nav-down">
            <a href="/"><h4>WeeklyGrind</h4></a>
           
            <div id="authentication">    
             <button id="login" onClick={this.loginButtonClicked}>Join / Login</button>
            </div> 
          </nav>

        )

      }

      else {

      // document.getElementById('intro').innerHTML = 'Welcome back, ' + this.state.currUserName + '!';
      // document.getElementById('hero-signup-btn').style.display = 'none';

      let formattedName = this.state.currUserName.toLowerCase().replace(/\s+/g, '')
      let groupsURL = '/user/' + formattedName + '/groups'

      return(

        <nav className="nav-down">
          <a href="/"><h4>WeeklyGrind</h4></a>
         
          <div id="authentication">
           <button><a href={groupsURL}>Groups</a></button>
           <button id="logout" onClick={this.logoutButtonClicked}>Logout</button>
           <img id="userImage" src={this.state.currUserImage} />
          </div> 
        </nav>

      )

    }
  }
}

export default Nav;
