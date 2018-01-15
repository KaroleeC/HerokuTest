import firebase from 'firebase';


const config = {
  apiKey: keys.FIREBASE_apiKey,
  authDomain: keys.FIREBASE_authDomain,
  databaseURL: keys.FIREBASE_dbURL,
  projectId: keys.FIREBASE_projectID,
  storageBucket: keys.FIREBASE_storeBucket,
  messagingSenderId: keys.FIREBASE_messageID
};

firebase.initializeApp(config);

let auth = firebase.auth();

const base = {
  googleLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  facebookLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  githubLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  logout: () => {
    auth.signOut();
  },
  auth: auth,
  // session: (cb)=> {
  //   console.log('session!!!!!!!!!')
  //   auth.onAuthStateChanged(function(user) {
  //     if (user) {
  //       // User is signed in.
  //       console.log(user,cb)
  //       cb(user)
  //     } else {
  //       // No user is signed in.
  //       cb(null)
  //     }
  //   })
  // }
}


export default base;

//import keys from '../../config.js'
// changed keys to process.env