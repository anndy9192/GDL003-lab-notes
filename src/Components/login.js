import React, { Component } from 'react';
import firebase from "firebase"
import firebaseConfig from './firebasekey.js'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    state = { isSignedIn: false }

    uiConfig = {
        singInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            singInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })

    }

    render() {
        return (
           <div>
               <img className="logo"
           src= {("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paper-notes.svg/768px-Paper-notes.svg.png")}/>
               <div class="title">
               <p> Remember Notes</p>
               </div>
               
                {this.state.isSignedIn ? (
                    <span>
                        <div className="sigIn" > Signed In! </div>
                        <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
                        <h1> Hola {firebase.auth().currentUser.displayName} </h1>
                        <img className="pictureUser" alt="profile picture" src={firebase.auth().currentUser.photoURL}
                        />
                    </span>
                ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
            </div>
        )
    }
}

export default Login;
