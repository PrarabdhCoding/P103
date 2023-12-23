const firebaseConfig = {
    apiKey: "AIzaSyBcNAT7vnWp1ShrgHS9aBRSh0WDcP8La7Q",
    authDomain: "let-s-chat-web-app-ad08b.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-ad08b-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-ad08b",
    storageBucket: "let-s-chat-web-app-ad08b.appspot.com",
    messagingSenderId: "347499962479",
    appId: "1:347499962479:web:60f65b95a3aad91c34ad9a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name" + room_name);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}