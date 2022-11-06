// validation for email 

function valid(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email=="lubna@gmail.com" && password=="lubna"){
        alert("Login Successfull")
        window.location.assign("amazon.html");
    }
    else{
    alert("username or password invalid");
    }
}

