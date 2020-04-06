import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyCA_izuD2Ygz3RMokpkrSO333TAh0nlNvQ",
    authDomain: "login-5ef19.firebaseapp.com",
    databaseURL: "https://login-5ef19.firebaseio.com",
    projectId: "login-5ef19",
    storageBucket: "login-5ef19.appspot.com",
    messagingSenderId: "889834325060",
    appId: "1:889834325060:web:435d9a4076e2a64698e811",
    measurementId: "G-JJQJ2H50EZ"
  }; 



class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());




    }



}
export default Firebase;

