// Initialize Firebase
var config = {
    apiKey: "AIzaSyBpQOjE7MXFMK5nn8T6dvjeG9-8f8ymWW4",
    authDomain: "chatapp-1f75d.firebaseapp.com",
    databaseURL: "https://chatapp-1f75d.firebaseio.com",
    projectId: "chatapp-1f75d",
    storageBucket: "chatapp-1f75d.appspot.com",
    messagingSenderId: "880223391613"
};
firebase.initializeApp(config);

function dbRef(ref){
    return firebase.database().ref('/cv/' + JSON.parse(localStorage.user).uid + ref);
}

function stRef(){
    return firebase.storage().ref(JSON.parse(localStorage.user).uid);
}