import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// TODO: replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyCYgvWD7rIPlWxuGtD0WqnOTY3Y0Q31-8I",
    authDomain: "weekly-grind.firebaseapp.com",
    databaseURL: "https://weekly-grind.firebaseio.com",
    storageBucket: "weekly-grind.appspot.com"
};

// initialize firebase app with config information
firebase.initializeApp(config);

ReactDOM.render(
		<App />, 
		document.getElementById('root')
	);
registerServiceWorker();
