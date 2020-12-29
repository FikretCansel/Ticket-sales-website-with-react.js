import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "enter your firebaseconfig",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
