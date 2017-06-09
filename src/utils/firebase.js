import firebase from 'firebase';

// TODO: replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyCYgvWD7rIPlWxuGtD0WqnOTY3Y0Q31-8I",
    authDomain: "weekly-grind.firebaseapp.com",
    databaseURL: "https://weekly-grind.firebaseio.com",
    projectId: "weekly-grind",
    storageBucket: "weekly-grind.appspot.com",
    messagingSenderId: "440498095937"
};

// initialize firebase app with config information
firebase.initializeApp(config);

const auth = firebase.auth();
export { firebase, auth } 