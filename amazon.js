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


const notifivalue = (x) =>{
    itemsnotifi.innerText = x;
}

const shop = (function(x){
    let nvalue = x;
    return { 
       addpage: function(){window.location.assign("/addcart.html")},
       addvalue: function(){ nvalue++; notifivalue(nvalue); },
       removevalue:function(){if(nvalue<0) return 0;
                    nvalue--; notifivalue(nvalue);}
                    
    }
})(0);

const temp = ()=> {
  shop["addpage"]();
  shop["addvalue"]();

}

const   addpage= ()=>{window.location.assign("/addcart.html")}