import React, { Component } from 'react';
import { auth, firebase } from './index.js'
import Home from './views/Home.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camels: 42,
      currUser: null,
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const camelsRef = rootRef.child('camels');
    // 'on' method synchronizes data in real time
    // attach it onto a reference that points to a place in the database
    // so when the database makes a change, make that update to our react state in real time
    camelsRef.on('value', snap => {
        this.setState({
          camels: snap.val()
        })
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
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

