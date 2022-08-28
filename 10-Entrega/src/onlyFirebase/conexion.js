//import 
import admin from 'firebase-admin';
import firebaseConfig from './firebasekeytest.json' assert { type: json};//funcionalidad experimental puede que falle en el futuro

//admin data
admin.initializeApp({
    credential: admin.credential.cert(),
    databaseUrl: 'https://entrega-backend-coderhoused.firebaseio.com'
});

//conexion
let database = admin.firestore();

export default database;