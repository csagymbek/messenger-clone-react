import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDqqTtqymejbVDuV8UaQOVr4Z6ZGgJfp1s",
        authDomain: "messenger-react-53f98.firebaseapp.com",
        databaseURL: "https://messenger-react-53f98.firebaseio.com",
        projectId: "messenger-react-53f98",
        storageBucket: "messenger-react-53f98.appspot.com",
        messagingSenderId: "869908488917",
        appId: "1:869908488917:web:0fa542fefca30bf73df85c"
});

export const db = firebaseApp.firestore();