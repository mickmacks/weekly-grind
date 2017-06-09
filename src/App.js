import React, { Component } from 'react';
import * as firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camels: 42,
      currUser: null,
      tacos: []
    }
  }

  componentWillMount() {
    // auth.onAuthStateChanged(currentUser => {
    //   if (currentUser) {
    //     console.log('Logged in:', currentUser);
    //     this.setState({ currentUser });
    //   } else {
    //     this.setState({ currentUser: null });
    //   }
    // });
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('tacos');
    const tacos = rootRef.child('taco1');
    // 'on' method synchronizes data in real time
    // attach it onto a reference that points to a place in the database
    // so when the database makes a change, make that update to our react state in real time
    tacos.on('value', snap => {
        this.setState({
          tacos: snap.val()
        })
    })
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
        <h1>Welcome To Weekly Grind I Guess...</h1> 
        <h2>fake camels is {this.state.tacos}</h2>     
      </div>
    );
  }
}

export default App;

