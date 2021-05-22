import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAe_RiJVCjdRCl3aFs-XpYyAVhSLsCprY8",
    authDomain: "shop-reactapp.firebaseapp.com",
    projectId: "shop-reactapp",
    storageBucket: "shop-reactapp.appspot.com",
    messagingSenderId: "863265791973",
    appId: "1:863265791973:web:af7160e4fe5f6cfe50990c"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};