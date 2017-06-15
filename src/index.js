import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import routes from './config/routes.js';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCYgvWD7rIPlWxuGtD0WqnOTY3Y0Q31-8I",
    authDomain: "weekly-grind.firebaseapp.com",
    databaseURL: "https://weekly-grind.firebaseio.com",
    storageBucket: "weekly-grind.appspot.com"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const fb = firebase.database().ref();

ReactDOM.render(

	<Router routes={routes} history={browserHistory} />, 
	document.getElementById('root')

);

export { auth, firebase, fb } 



