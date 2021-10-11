import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCT44tctSgHV8xjsWCds6kjWoZrKbANVu4",
    authDomain: "cadastro-clientes-81ab6.firebaseapp.com",
    projectId: "cadastro-clientes-81ab6",
    storageBucket: "cadastro-clientes-81ab6.appspot.com",
    messagingSenderId: "397342474241",
    appId: "1:397342474241:web:4b4716671b973a00570000"
  };
  
  // Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()