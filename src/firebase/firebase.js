import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC0vc8mZMEdMbXdbax1Cfd2q2YE-Dsu-OE",
    authDomain: "expensify-f2504.firebaseapp.com",
    databaseURL: "https://expensify-f2504.firebaseio.com",
    projectId: "expensify-f2504",
    storageBucket: "expensify-f2504.appspot.com",
    messagingSenderId: "940034352305"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }