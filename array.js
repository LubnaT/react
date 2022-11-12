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

// // can also add element at the end of array or right side using length 
// pu[pu.length] = 30;
// console.log(pu);


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

// // join method--return array as string
// console.log(sum.join());
// console.log(sum.join("-->"));

// // concat method-- combines 2 array and return a new array
// const xx = sum.concat(pu);
// console.log(xx);

// // spread method-- here we use"...sum" 3 dots in front of array
// //  by using this we can add that array at the index position we like in any other array  
// const x2 = [2, 5, 6,...sum,"hi","yepp"];
// console.log(x2);

// // shift method-- remove 1st index item in array
// const x1=[1,2,"hi","home",8,9];
// var x= x1.shift();
// console.log(x1,x);


// // unshift method-- add 1st index item in array
// var x= x1.unshift("yo");
// console.log(x1,x);

// // splice method-- used to ad items in middle of array. It has 3 arg 
// // 1st is at which index to start adding items 
// // 2nd how many items to be deletd on that index where we are addind item
// //  3rd items to be added 
// x1.splice(3,0,60,"no");
// console.log(x1);

// x1.splice(4,1,"yes");
// console.log(x1);

// // indexOf method-- returns index position of specified item in an array 
// // searches array from left to right
// // returns -1 if not found
// let no = x1.indexOf("hi");
// console.log(no);
// console.log(x1.indexOf("hello"));

// // copywithin method--copy the array items on other array position within same array
// const x3 = [1,2,4,"hello",6,"hi"];
// // 3 is from this index position we have to change 
// // 1 is start of index position from wher to start the copy 
// //  4 is endof index position to which end the copy
// x3.copyWithin(3,1,4);
// console.log(x3);
// // change 4 index value which start from 0 index and goes on
// x3.copyWithin(4,0);
// console.log(x3);
// // change 4th index from 5 th index value
// x3.copyWithin(4,5);
// console.log(x3);


// // fill method-- fills specified elements in an array with a value.
// // The fill method overwrites the original array.
// const x4 = [1,3,5,5,7,6];
// console.log(x4.fill("kiwi",4,5));
// // Start and end position can be specified. If not, all elements will be fill
// console.log(x4.fill("kiwi"));












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


// // 10-11-22 Assignment Return a new array which has all the items whose index is multiple of 5 removed
// //  and all the occurance of 5 removed as well
const item = [5,1,2,4,2,2,5,55,6,2,3,6,1,5,0,6,9,10];
// const item1 = [];
// const value = item.filter((x,y) => x%5 !=0);
// item1.push(value);
// console.log(item1);



// // 11-11-22 Assignment combine 2 filter and apply map to it and return array
// const item2 = [];
// const val = item.filter((x,y) => y%5 !=0 && x%5!=0).map( x => x.toString());
// item2.push(val);
// console.log(item2);

// const newdata = [{'task1':'exercise'},[1,2,3], function hello(){console.log("Hello")}];
// console.log(newdata);

// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.pop();
// console.log(studentsData);







