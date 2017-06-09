import React, { Component } from 'react';
import { firebase, auth } from './utils/firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log in
    console.log("signing in")
  }
  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Weekly Grind I Guess</h1>      
      </div>
    );
  }
}

export default App;
