var firebaseConfig = {
    apiKey: "AIzaSyAG02ZUiwIeRDIFy3fHZYfr0QOxbw1cK7Q",
    authDomain: "twitter-ripoff-e5cf4.firebaseapp.com",
    databaseURL: "https://twitter-ripoff-e5cf4-default-rtdb.firebaseio.com",
    projectId: "twitter-ripoff-e5cf4",
    storageBucket: "twitter-ripoff-e5cf4.appspot.com",
    messagingSenderId: "690719742978",
    appId: "1:690719742978:web:035a92f5efe92e36b5db1b"
  };
firebase.initializeApp(firebaseConfig);

function adduser(){
    username = document.getElementById("input1").value;
    firebase.database().ref("/").child(username).update({
        purpose: "adding user"
    });
}