import firebase from "firebase";
import firebaseConfig from "./config/firebase";

try {
  firebase.app();
} catch (e) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
