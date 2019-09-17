import React, { Component } from 'react';
import firebase from "firebase"
import firebaseConfig from './firebasekey.js'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


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
               <center>
               <img className="logo" 
           src= {("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paper-notes.svg/768px-Paper-notes.svg.png")}/>
               <div className="title">
               <h1> Remember Notes</h1>
               </div>
               </center>

                {this.state.isSignedIn ? (
                    <span>
                        <center>
                        
                        <h1 class="saludo"> Hola {firebase.auth().currentUser.displayName} </h1>
                        <img className="pictureUser" alt="profile picture" src={firebase.auth().currentUser.photoURL}
                        /> <p>
                        <button onClick={() => firebase.auth().signOut()}>Sign Out</button> </p>
                        </center>    
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
