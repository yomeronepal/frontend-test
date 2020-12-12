import firebase from 'firebase';


const firebaseConfig = {
	apiKey: "AIzaSyBXnBCF8Q1uV1bEdCR6vaZolHBxz61TNTU",
  	authDomain: "todo-94c1a.firebaseapp.com",
 	projectId: "todo-94c1a",
  	storageBucket: "todo-94c1a.appspot.com",
  	messagingSenderId: "743749279372",
 	appId: "1:743749279372:web:b9f9531644143898bda5a9",
  	measurementId: "G-PC7VZXQ1KY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;