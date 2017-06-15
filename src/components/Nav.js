import React, {Component} from 'react'
import { auth, firebase, fb } from '../index.js'

let userCount = 10;

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currUser: null,
      currUserName: '',
      currUserImage: '',
      loggedIn: true
    }
    this.loginButtonClicked = this.loginButtonClicked.bind(this)
    this.logoutButtonClicked = this.logoutButtonClicked.bind(this)

  }
  
  componentWillMount() {
    auth.onAuthStateChanged(currUser => {
      if (currUser) {

        this.setState({ 
          currUser: currUser,
          currUserName: currUser.displayName,
          currUserImage: currUser.photoURL,
          loggedIn: true
         });

        document.getElementById('intro').innerHTML = 'Welcome back, ' + this.state.currUserName + '!';
        document.getElementById('primary-btn').style.display = 'none';

        // var newPassword = getASecureRandomPassword()

        const usersRef = fb.child('users');
        let username = this.state.currUserName.toLowerCase().replace(/\s+/g, '')
        
        let nameArray = this.state.currUserName.split(" ")
        let firstName = nameArray[0]
        let lastName = nameArray[1]

        usersRef.child("users").child(username).equalTo(username).once("value", function(snapshot) {
        var userData = snapshot.val();
          if (!userData){

            usersRef.child(userCount).set({
                  
                    uid: currUser.uid,
                    email: currUser.email,
                    name: currUser.displayName,
                    firstName: firstName,
                    lastName: lastName,
                    location: 'San Francisco, CA',
                    password: 'password',
                    userImage: currUser.photoURL,
                    _id: "userCount"

            })

            userCount++
          }
        });

        document.getElementById('userImage').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'inline-block';
        document.getElementById('login').style.display = 'none';

      } else {

        this.setState({ 
          currUser: null,
          currUserName: '',
          currUserImage: '',
          loggedIn: false
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
    auth.signInWithPopup(provider);
    console.log("signing in")
    // tell Firebase auth to log in with a popup and that provider

  }

  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();

    this.setState({
      loggedIn: false
    })

    let welcomeMessage = "Weekly Grind is a community for growing creative minds. No rules, no limits."

    document.getElementById('intro').innerHTML = welcomeMessage;
    document.getElementById('primary-btn').style.display = 'block';
    document.getElementById('primary-btn').innerHTML = 'Sign Up';
  }

  render() {

      if (this.state.loggedIn === false) {

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

      let formattedName = this.state.currUserName.toLowerCase().replace(/\s+/g, '')
      let groupsURL = '/user/' + formattedName + '/groups'

      return(

        <nav className="nav-down">
            <a href="/"><h4>WeeklyGrind</h4></a>
         
          <div id="authentication">
           <button><a href={groupsURL}>Groups</a></button>
           <button id="logout" onClick={this.logoutButtonClicked}><a href="/">Logout</a></button>
           <img id="userImage" src={this.state.currUserImage} />
          </div> 
        </nav>

      )

    }
  }
}

export default Nav;
