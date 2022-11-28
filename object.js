// const obj ={
//     name:"lubna",
//     gender:"F",
//     color:"yellow",
//     place:"karnataka",
//     education:["HSC","graduate"],
//     hello: function(){
//                 console.log("hello");
//                 return "hello";
//     },
//     mycolor:function(){
//         return this.name+" likes "+this.color+" color";
//     },
//     myplace:function(x){
//         return this.place+" is hometown of "+x;
//     }
// };

// // calling a object
// console.log(obj);
// // calling key of object
// console.log(obj.name);
// // calling a funcion
// console.log(obj.hello());
// console.log(obj.mycolor());
// console.log(obj.myplace("aiza"));

// 19 nov assignment 
// 
// const bank = {
//     name:"Lubna",
//     age:25,
//     phoneNo:566277252,
//     balance:2000,
//     pin:8898,
//     transaction:[],
//     credit:function(x){
//         if(x<=0) return "Not valid value";
//              this.balance = this.balance+x;
//             //  console.log(this.balance);
//             this.transaction.push(x);
//              return this.balance;
//     },
//     debit:function(x){
//         if(x<=0 || this.balance<x) return "Not valid value";
//         this.balance = this.balance-x;
//         this.transaction.push(x);
//         // console.log(this.balance);
//         return this.balance;
//       },
//      changePin:function(x){
//        this.pin = x; 
//       console.log("Pin Changed");
//        },
//        recentTrasanction:function(){
//     //   this.transaction = this.transaction.push(${this.credit}`);
//     //   this.transaction = this.transaction.push(`+ ${this.balance}`);
//        // if(this.credit || this.debit) return this.transaction.push(this.credit);
//           // this.transaction.push(this.debit);
          
//           return this.transaction;
//        }

// };

// console.log(bank);
// console.log(bank.credit(200));
// console.log(bank.debit(100));
// console.log(bank.credit(500));
// console.log(bank.debit(100));
// console.log(bank.recentTrasanction());
// console.log(bank.changePin());
// console.log(bank.transaction);

