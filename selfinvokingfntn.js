

// const counters = (function(){
//     let counter=0;
//     return { 
//        Increment: function(){ counter++; return counter;},
//        Decrement:function(){
//                     counter--; return counter;}
                    
//     }
// })();

// console.log(counters["Increment"]());
// console.log(counters["Decrement"]());


// correct

// function temp(fn){

//     fn(a,b);
// }
// function add(a,b){
//     console.log(a+b);
// }

// console.log(temp(add(3,2)));

// doubt

// function temp(fn){
// // let a;
// // let b;
//     fn(a,b);
// }
// function add(a,b){
   
// let  c= a+b;
// //  return c;
//    console.log(c);
// }

// console.log(temp(add(3,2)));




// function cons(fn){
//     fn();
// }

// function sub(){
//    let a=2;
//    let b=2;
//    let c=a-b;
//    console.log(c);
// }

// console.log(cons(sub()));



// explicit return function with arrow function
function div(x){
    return function(y){
        return x/y;
    }
};

console.log(div(4)(2));


const a=(x)=>(y)=>x/y;
console.log(a(4)(2));



// recursion
function recur(x){
    console.log(x);
    let y = x-1;
    if(y>0){
        recur(y);
    }
};
recur(10);


