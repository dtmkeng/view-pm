import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBgc2F_eN5N3Gszjb4rT2HgZPbUXrB86bo",
    authDomain: "test-27303.firebaseapp.com",
    databaseURL: "https://test-27303.firebaseio.com",
    projectId: "test-27303",
    storageBucket: "test-27303.appspot.com",
    messagingSenderId: "258458873468"
  };
  export const app = firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()