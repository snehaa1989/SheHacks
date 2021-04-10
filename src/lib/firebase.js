import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOEDpPkj1FDTzuZZlYi-up9i4oC_0JTEc",
  authDomain: "pandemic-4c680.firebaseapp.com",
  projectId: "pandemic-4c680",
  storageBucket: "pandemic-4c680.appspot.com",
  messagingSenderId: "1058442316811",
  appId: "1:1058442316811:web:0db13f48cc56c5558fcb0e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
