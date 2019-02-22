import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXhzz3fNSMck8g2Z5LdDDOBXQ_zIcKOFI",
  authDomain: "revents-231916.firebaseapp.com",
  databaseURL: "https://revents-231916.firebaseio.com",
  projectId: "revents-231916",
  storageBucket: "revents-231916.appspot.com",
  messagingSenderId: "1072315309394"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
