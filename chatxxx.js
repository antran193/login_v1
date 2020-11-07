const firebaseConfig = {
    apiKey: "AIzaSyDTJaHioa8AkOjbHWS0ys4wynxq5lW8KJI",
    authDomain: "chatxxx-93eb4.firebaseapp.com",
    databaseURL: "https://chatxxx-93eb4.firebaseio.com",
    projectId: "chatxxx-93eb4",
    storageBucket: "chatxxx-93eb4.appspot.com",
    messagingSenderId: "775128877896",
    appId: "1:775128877896:web:34dd95448ffb281278817d",
    measurementId: "G-0E6KHXCVXJ"
};
firebase.initializeApp(firebaseConfig);

var userlocal= localStorage.getItem("user");
var passlocal=localStorage.getItem("pass");
console.log(userlocal,passlocal);
var myName = prompt("enter");
function sendMessage(){
    var message = document.getElementById("messaage").value;
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    });
    return false;
    
}
firebase.database().ref("messages").on("child_added", function(snapshot){
    var y = document.getElementById("bodymess");
    var y="";
    y += "<li id='messages-" + snapshot.key +"'>";
    y += snapshot.val().sender+ ": "+ snapshot.val().message;
    if(snapshot.val().sender == myName)
    {
        y += "<button class='btndelete' data-id ='" + snapshot.key + "' onclick='deletemessages(this);'>";
        y += "Delete";
        y += "</button>";
    }
    y += "</li>";
    document.getElementById("messages").innerHTML += y;
    // var html = "";
    // html += "<li>";
    // html += snapshot.val().sender + ": " + snapshot.val().message;
    // html += "</li>";
    // document.getElementById("messages").innerHTML += html;
    // console.log(html);
});
function deletemessages(deletemes)
{
    var messid = deletemes.getAttribute("data-id");
    firebase.database().ref("messages").child(messid).remove();
}
firebase.database().ref("messages").on("child_removed", function(snapshot)
{
    document.getElementById("messages-"+ snapshot.key).innerHTML ="Mess has remove";
})