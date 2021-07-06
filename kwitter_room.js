
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

username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + ".";

function addroom(){
  roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "adding room name"
    });
  localStorage.setItem("roomname",roomname);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name: " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

function redirect(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location = "kwitter_page.html";
}