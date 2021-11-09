import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBBfJRjyg2mKQauPbP7L-XGE8R2kWzVNEI",
    authDomain: "gdrive-dev-2021.firebaseapp.com",
    projectId: "gdrive-dev-2021",
    storageBucket: "gdrive-dev-2021.appspot.com",
    messagingSenderId: "37814276828",
    appId: "1:37814276828:web:65733372d919cec3fada19"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const storage = firebase.storage();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export {db,storage,auth,provider}