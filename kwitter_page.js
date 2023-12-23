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
  room_name = localStorage.getItem("room_name");
  
  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
    });
  
  
    document.getElementById("msg").value = "";
  
  }
  
  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
  
  
          //End code
        }
      });
    });
  }
  
  getData();