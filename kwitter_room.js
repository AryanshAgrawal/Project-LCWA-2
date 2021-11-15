const firebaseConfig = {
    apiKey: "AIzaSyD64ZMSLy0B9nCyGrqszX6HVHIUrWodsXQ",
    authDomain: "kwitter-30bcb.firebaseapp.com",
    projectId: "kwitter-30bcb",
    storageBucket: "kwitter-30bcb.appspot.com",
    messagingSenderId: "487897704784",
    appId: "1:487897704784:web:90c4915129ec27c702e455",
    measurementId: "G-Q8LH89738M"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function add_room(){
function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) 
{document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();
  }