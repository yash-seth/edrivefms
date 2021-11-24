import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBBfJRjyg2mKQauPbP7L-XGE8R2kWzVNEI",
    authDomain: "gdrive-dev-2021.firebaseapp.com",
    projectId: "gdrive-dev-2021",
    storageBucket: "gdrive-dev-2021.appspot.com",
    messagingSenderId: "37814276828",
    appId: "1:37814276828:web:65733372d919cec3fada19"
  };

// function listAll(folder)
// {
//   const storageRef = firebase.storage().ref();

//   var listRef = storageRef.child(folder);

//   listRef.listAll().then((res)=>{
//     res.prefixes.forEach((folderRef)=>{

//     });
//     res.items.forEach((itemRef)=>{
//       itemRef.getDownloadURL().then((url)=>{
//         console.log("download url:"+url);
//       });
//     });
//   })
//   .catch((error)=>{
//     console.log(error);
//   });
// }
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const storage = firebase.storage();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export {db,storage,auth,provider}