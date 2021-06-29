
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
