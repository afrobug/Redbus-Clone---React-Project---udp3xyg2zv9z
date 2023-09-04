import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJal_vbawYuZSHoo_J6C7KtlWsFU6Wwv4",
  authDomain: "redbus-45f45.firebaseapp.com",
  projectId: "redbus-45f45",
  storageBucket: "redbus-45f45.appspot.com",
  messagingSenderId: "1079281050548",
  appId: "1:1079281050548:web:2fd2444c57a7000f48c8e1",
  measurementId: "G-9Q3CNC57F2",
};

const redbus = firebase.initializeApp(firebaseConfig);

const db = redbus.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { provider, auth };