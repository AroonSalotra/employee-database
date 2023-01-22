import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNzMPuvDvQ_mjKFOcBoPR6686OX7zJsB4",
    authDomain: "employer-db.firebaseapp.com",
    projectId: "employer-db",
    storageBucket: "employer-db.appspot.com",
    messagingSenderId: "315898390592",
    appId: "1:315898390592:web:5cb4d97f405c8c3b7397a5"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
