import React, { Component } from 'react';
import WithFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import withFirebaseAuth from 'react-with-firebase-auth';


const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render (){
        const { user, signOut, signInWithGoogle } = this.props;
return(
    <div>
        {
            user ?
            <p> Hola, {user.displayName} </p>
            : <p>Por Favor, Inicie sesion</p>
        }
        {
            user
            ? <button onClick={signOut}>Sign Out</button>
            : <button onClick={signInWithGoogle} >Sing in with Google</button>
    }
        </div> 
);
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
