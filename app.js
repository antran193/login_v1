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
    // firebase.analytics();

    var email='';
    var pass='';
    const txtemail = document.getElementById("user");
    const txtpassword = document.getElementById("password");
    const btnlogin = document.getElementById("loginbutton");
    const btnsignup = document.getElementById("signup");
    const btnlogout = document.getElementById("logout");
    btnlogin.addEventListener('click',e =>{
        email = txtemail.value ;
        pass = txtpassword.value;
        console.log(email,pass);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));

    });

    btnsignup.addEventListener('click',e =>{
        email = txtemail.value ;
        pass = txtpassword.value;
        // console.log(email,pass);
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,pass).then(function(e){

            sendMessage(e.user.uid,email);
            //Here if you want you can sign in the user
          }).catch(function(error) {
              //Handle error
          });
       
        function sendMessage(id,a){
           
            firebase.database().ref(id).push().set({
                "sender": a,
                "message": "Xin chao"
            });
            return false;
            
        }
    });

    // btnlogout.addEventListener('click', e=> {
    //     firebase.auth().signOut();
    // })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
            var a=localStorage.setItem("user",email);
            var b=localStorage.setItem("pass",pass);
            
            console.log(a,b);
            console.log(firebaseUser);
            //window.location="./chatxxx.html";


        }
        else
        {
            console.log('no login');
        }
    })
    

