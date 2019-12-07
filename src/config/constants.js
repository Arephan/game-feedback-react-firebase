import firebase from 'firebase'
var Rebase = require('re-base');

const config = {
  apiKey: "AIzaSyCt6M2EhYF_VrFwVsthF0F52R3_Q6w-LNg",
  authDomain: "game-feedback-40417.firebaseapp.com",
  databaseURL: "https://game-feedback-40417.firebaseio.com"
}

var app = firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const db = firebase.database(app)
export const base = Rebase.createClass(db)
