import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import routes from './config/routes.js';
// import App from './App';
// import './css/main.css';
import * as firebase from 'firebase';

// TODO: replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyCYgvWD7rIPlWxuGtD0WqnOTY3Y0Q31-8I",
    authDomain: "weekly-grind.firebaseapp.com",
    databaseURL: "https://weekly-grind.firebaseio.com",
    storageBucket: "weekly-grind.appspot.com"
};

// initialize firebase app with config information
firebase.initializeApp(config);

const auth = firebase.auth();

ReactDOM.render(
		<Router routes={routes} history={browserHistory} />, 
		document.getElementById('root')
	);

export { auth, firebase } 



