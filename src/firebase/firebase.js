import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
  //OBJETO DE FIREBASE
    apiKey: "AIzaSyA-xCLN-4tp21-NamG0h29igYCEWKlZFEM",
    authDomain: "tienda-gomez-2021.firebaseapp.com",
    projectId: "tienda-gomez-2021",
    storageBucket: "tienda-gomez-2021.appspot.com",
    messagingSenderId: "208376654110",
    appId: "1:208376654110:web:b23f1e54c8926693d6010f"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}
export const database = firebase.firestore();