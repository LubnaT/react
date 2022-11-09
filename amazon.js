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

// for adding removing value from notification 
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

// caling both function using single function 
const temp = ()=> {
  shop["addpage"]();
  shop["addvalue"]();

}

const   addpage= ()=>{window.location.assign("/addcart.html")}

// for giving total amount for buying an item 
const buy = () =>{
    const totalvalue = Number(lamp.innerText) + Number(sweater.innerText) + Number(tax.innerText) +  Number(pack.innerText);
    const value = Number(totalvalue) + Number(total.innerText);
    total.innerText = value;
}

// function for removing item from cart 
const itemarr=['item2','item1'];
const remove= ()=>{
    
          itemarr.pop();
          console.log(itemarr);
}

