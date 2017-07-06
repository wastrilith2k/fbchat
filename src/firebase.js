import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBJDvAf55MZax5iPLA-toDgI4VrnYpMCDM",
    authDomain: "chat-94791.firebaseapp.com",
    databaseURL: "https://chat-94791.firebaseio.com",
    projectId: "chat-94791",
    storageBucket: "chat-94791.appspot.com",
    messagingSenderId: "413170039203"
  };
  firebase.initializeApp(config);

  const root = firebase.database().ref();
  const todos = firebase.database().ref('todos');

  const Fb = {
      root,
      todos
  }

  export { Fb };