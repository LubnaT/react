

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


// const counter = (function (){
//     counts = 0;
//    function incr(){
//              counts++;
//              return counts;
//     }
//     function decr(){
// counts--;
// return counts;
//     }  
//     function arbi(x){
//            return x;
//     }
//     return[incr,decr,arbi];      
// })();

// console.log(counter[2](3));

// // using destructuring
// const [Increment,Decrement,arbitary] = (function (){
//     counts = 0;
//    function incr(){
//              counts++;
//              return counts;
//     }
//     function decr(){
// counts--;
// return counts;
//     }  
//     function arbi(x){
//            return x;
//     }
//     return[incr,decr,arbi];      
// })();

// console.log(Increment());
// console.log([Increment(),Decrement(),arbitary(5)]);

// // use anonymous function 
// const [incr,decr,arbi] = (function (){
//     counts = 0;
//    let a = function (){
//              counts++;
//              return counts;
//     }
//     let b= function (){
// counts--;
// return counts;
//     }  
//     let c = function (x){
//            return x;
//     }
//     return[a,b,c];      
// })();

// console.log(incr());
// console.log([incr(),decr(),arbi(5)]);

// // using arrow function 
// const [incr,decr,arbi] = (function (){
//     counts = 0;
//    let a = () =>{
//              counts++;
//              return counts;
//     }
//     let b= () => {
// counts--;
// return counts;
//     }  
//     let c = (x)=>{
//            counts =x;
//            return counts;
//     }
//     return[a,b,c];      
// })();

// console.log(incr());
// console.log([incr(),decr(),arbi(5)]);

// convert sub functions to objects 
const  fn= (function (){
    counts = 0;
   const obj= { 
    a : function(){
             counts++;
             return counts;
    },
    b : function() {
         counts--;
          return counts;
    } , 
    c : function(x){
           counts =x;
           return counts;
    }
}
return [obj.a,obj.b,obj.c];
})();
[incr,decr,arbi] = fn;
console.log(incr());
console.log([incr(),decr(),arbi(5)]);