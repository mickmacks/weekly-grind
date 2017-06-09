// import firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyCYgvWD7rIPlWxuGtD0WqnOTY3Y0Q31-8I",
//   authDomain: "weekly-grind.firebaseapp.com",
//   databaseURL: "https://weekly-grind.firebaseio.com",
//   projectId: "weekly-grind",
//   storageBucket: "weekly-grind.appspot.com",
//   messagingSenderId: "440498095937"
// };

// // initialize firebase app with config information
// firebase.initializeApp(config);

// const firebaseListToArray = (firebaseObjectList) => {
//   if (!firebaseObjectList) return [];

//   return Object.keys(firebaseObjectList)
//     .map(k => {
//       const obj = {
//         id: k
//       };
//       for (let key in firebaseObjectList[k]) {
//         if (firebaseObjectList[k].hasOwnProperty(key)) {
//           obj[key] = firebaseObjectList[k][key];
//         }
//       }
//       return obj;
//     });
// }

// const database = firebase.database();
// const auth = firebase.auth();

// export { firebase, auth };
// export { firebaseListToArray };
