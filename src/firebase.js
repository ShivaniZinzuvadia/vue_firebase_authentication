import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
var firebaseConfig = {
    apiKey: "AIzaSyCvokEg8WEWbrnKhfE8OYeNdmYlEeEdUu8",
    authDomain: "vue-learning-a18f2.firebaseapp.com",
    databaseURL: "https://vue-learning-a18f2.firebaseio.com",
    projectId: "vue-learning-a18f2",
    storageBucket: "vue-learning-a18f2.appspot.com",
    messagingSenderId: "214843381933",
    appId: "1:214843381933:web:011c867a3f4cea2b920e24",
    measurementId: "G-7W449DLNWM"
  };
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// export utils/refs
export {
  db,
  auth,
  googleProvider
}