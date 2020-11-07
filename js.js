

var user = "";
var password = "";
var userlocal= localStorage.getItem("user");
var passlocal=localStorage.getItem("pass");
// if(userlocal!="" && passlocal!="")
// {
//     window.location="file:///C:/data/banh/banh/index.html";
// }


// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }



function getvalue() {
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    var domancharacter=  /[a-z0-9_]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
    var pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
    if(user.match(domancharacter)&&password.match(pass))
    {
        $.ajax({
            url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
            type: "get", // chọn phương thức gửi là get
            dateType: "json", // dữ liệu trả về dạng text
            success: function (result) {
                // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
                authen(result);
                console.log(result);
            }
        });
    }
    // console.log(user, password);
}





var y = document.getElementById("errpassword");
var z = document.getElementById("erruser");
var userinput = document.getElementById("user");
var passwordinput = document.getElementById("password");

// function loadform() {
//     var x = document.getElementById("formlogin").style.display = "block";
// }
// window.onclick = function (event) {
//     var y = document.getElementById("formlogin");
//     if (event.target == y) {
//         y.style.display = "none";
//     }
// }

var domainmail=document.getElementById("domainmail");
var passwordinput = document.getElementById("password");
var lower = document.getElementById("lower");
var uppers = document.getElementById("upper");
var number = document.getElementById("number");
var minlength = document.getElementById("minlength");

userinput.onfocus=function()
{
    z.style.display="block";
    document.getElementById("erruser1").style.display="none";
    if(localStorage.getItem("user")!="")
    {
        document.getElementById("user").value=localStorage.getItem("user");
    }
}
passwordinput.onfocus = function () {
    y.style.display = "block";
    document.getElementById("errpass1").style.display="none";
    if(localStorage.getItem("user")==document.getElementById("user").value)
    {
        var ad=localStorage.getItem("pass")
        console.log(ad);
        document.getElementById("password").value=ad;
    }
    // else
     

}
passwordinput.onblur = function () {
    y.style.display = "block";
    
}
userinput.onblur=function(){
    z.style.display="block";
}
userinput.onkeyup= function()
{
    var domancharacter=  /[a-z0-9_]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
    if(userinput.value.match(domancharacter))
    {
        domainmail.classList.add("valid");
        domainmail.classList.remove("invalid");
    }
    else
    {
        domainmail.classList.remove("valid");
        domainmail.classList.add("invalid");
    }
}
passwordinput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (passwordinput.value.match(lowerCaseLetters)) {
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    } else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (passwordinput.value.match(upperCaseLetters)) {
        uppers.classList.remove("invalid");
        uppers.classList.add("valid");
    } else {
        uppers.classList.remove("valid");
        uppers.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (passwordinput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (passwordinput.value.length >= 8) {
        minlength.classList.remove("invalid");
        minlength.classList.add("valid");
    } else {
        minlength.classList.remove("valid");
        minlength.classList.add("invalid");
    }
}

function authen(data) {
    var y = document.getElementById("errpass1");
    var z = document.getElementById("erruser1");
    y.style.display="block";
    z.style.display="block";
    userinput.style.border = "none";
    passwordinput.style.border = "none";
    y.innerHTML="";
    z.innerHTML="";
    var lengh=data.length;
    for (var i = 0; i < lengh; i++) {
        
        if (user == "" || password == "") {
            if(user == "" && password != "")
            {
                y.innerHTML = "Sai password";
                passwordinput.style.border = "solid 2px red";
                passwordinput.style.backgroundColor = "#fceae9";
                z.innerHTML = "Enter your mail";
                userinput.style.border = "solid 2px red";
                userinput.style.backgroundColor = "#fceae9";
                break;
                
            }
            if(user == "" && password == "")
            {
                y.innerHTML = "Enter your password";
                passwordinput.style.border = "solid 2px red";
                passwordinput.style.backgroundColor = "#fceae9";
                z.innerHTML = "Enter your mail";
                userinput.style.border = "solid 2px red";
                userinput.style.backgroundColor = "#fceae9";
                break;
            }
            if(user != "" && password == "")
            {
                y.innerHTML = "Enter your password";
                passwordinput.style.border = "solid 2px red";
                passwordinput.style.backgroundColor = "#fceae9";
                z.innerHTML = "Sai user";
                userinput.style.border = "solid 2px red";
                userinput.style.backgroundColor = "#fceae9";
                break;
            }
            
        }
        if (user == data[i].username && password == data[i].password) {
            // function()
            {
                // window.location="file:///C:/xampp/htdocs/login/table.html";
                window.location="./table.html";
                // window.location="http://localhost/login/table.html"
                var a=localStorage.setItem("user",user);
                var b=localStorage.setItem("pass",password);

                console.log(a,b);
            }
            // alert("thanhf coong");
            break;
        }
        if (user == data[i].username && password != data[i].password) {
            if(i=data.length-1)
            {
                y.innerHTML = "Sai password";
                passwordinput.style.border = "solid 2px red";
                passwordinput.style.backgroundColor = "#fceae9";
                break;
            }     
        }
        if (user != data[i].username && password == data[i].password) {
            if(i=data.length-1)
            {
                z.innerHTML = "Sai User";
                userinput.style.border = "solid 2px red";
                userinput.style.backgroundColor = "#fceae9";
                break;
            }
        }
        if (user != data[i].username && password != data[i].password) {
            if(i==lengh)
            {
                y.innerHTML = "Sai password";
                z.innerHTML = "Sai User";
                passwordinput.style.border = "solid 2px red";
                userinput.style.border = "solid 2px red";
                userinput.style.backgroundColor = "#fceae9";
                passwordinput.style.backgroundColor = "#fceae9";
                break;
            }
        }
    }
}
function mDown()
{
    document.getElementById("password").type= "text";
}
function mUp()
{
    document.getElementById("password").type= "password";
}