// // homogenious array- contain only string
// // non homogenious- contain both string nd no's

// // empty values in array is called holes nd it also has index value
// const arrays=[1,2, , , 7];




// // push add item to array from right side 

// // push item in array using function
// const pu = [1, 2, 3, 4, 5,6,7,"lubna","hi"];

// function pushs(){
//     pu.push("hello");
//     console.log(pu);
// };

// pushs();

// // push item in array directly
// pu.push("Heyy");

// // pop remove item in array from right side 

// // pop or remove item from array using function
// function pops(){
//     pu.pop();
//     console.log(pu);
// };
// pops();

// // pop item from array directly
// pu.pop();

// // pop item from array and store in variable and can console it to check the item removed
// const no = pu.pop();

// console.log(no);
// console.log(pu,no);

// // using templete string we can use a variable with string value anywhere with ${}
// let na="Aiza";

// console.log(`hi ${na}`);  

// // assign array item or value to a variable using array index
// const nam = pu[6];
// console.log(nam);
// console.log(pu,nam);

// // update array item or value by assigning updated value to a variabe then assign it to  array index
// const hey="homme";
// pu[6] = hey;
// console.log(pu);

// // array which has 3 array inside it and call 2nd array's sub array item heyy
// const sum = [["hello","hi"],[1,9,["me","heyy"]],[54,6]];
// console.log(sum[1][2][1]);

// // length method 
// console.log(sum.length);

// // sort method
// console.log(sum.sort());

// // join method
// console.log(sum.join());
// console.log(sum.join("-->"));

// // concat method 
// const xx = sum.concat(pu);
// console.log(xx);

// // spread method-- here we use"...sum" 3 dots in front of array
// //  by using this we can add that array at the index position we like in any other array  
// const x2 = [2, 5, 6,...sum,"hi","yepp"];
// console.log(x2);


// // insert object inside an array 
// const arr1 = [1,5,7,"hello"];
// const user = {
//     name:"lubna",
//     age:25,
//     gender:"F"
// };
// arr1[4]=user;
// console.log(arr1);

// // push an object and items in array 
// const arr2 = [];
// arr2.push("hello");
// arr2.push("hi");
// arr2.push("yep");
// arr2.push(45);
// arr2.push([]);
// arr2[4].push(2);
// arr2[4].push("do");
// arr2[4].push({"ko":[]});
// arr2[4][2]["ko"].push("mi");
// arr2[4][2]["ko"].push([]);
// arr2[4][2]["ko"][1].push("yo");
// arr2[4][2]["ko"][1].push({hi: "hello"});
// arr2.push([]);
// arr2[5].push(3);

// console.log(arr2);

const item = [5,1,2,4,2,2,5,55,6,2,3,6,1,5,0,6,9,10];
const item1 = [];
const value = item.filter(x => x%5 !==0);
item1.push(value);
console.log(item1);








