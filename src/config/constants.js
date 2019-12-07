import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCt6M2EhYF_VrFwVsthF0F52R3_Q6w-LNg",
  authDomain: "game-feedback-40417.firebaseapp.com",
  databaseURL: "https://game-feedback-40417.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth