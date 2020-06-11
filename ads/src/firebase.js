import firebase from 'firebase/app'
import 'firebase/analytics';
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6YeeRLDspz-EKwz_sx9-iXEsnYhW1F-g",
  authDomain: "bored-fire.firebaseapp.com",
  databaseURL: "https://bored-fire.firebaseio.com",
  projectId: "bored-fire",
  storageBucket: "bored-fire.appspot.com",
  messagingSenderId: "742352579282",
  appId: "1:742352579282:web:62dc243833bfc8ea289b0b",
  measurementId: "G-3FJLVZ2QEE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase