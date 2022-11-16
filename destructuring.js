// // Destructuring -- JavaScript expression that makes it possible to unpack values from arrays,
// //   or properties from objects, into distinct variables.

// //array destructuring

// // assiging variables to values is in sequence
//  const arr = ["Hello","Hi"];
// //  can also do it in this way
// const [a,b] =arr;
// //  console.log(arr);
// console.log(a);
// console.log(b);

// //  instead of using arr variable we can store hello and hi array values
//  in seperate variables directly
//  const [a,b] = ["Hello","Hi"];
//  console.log(a);
//  console.log(b);

// // destructuring more items
// const arr = ["one","two","three"];
// const [a,b,c,d,e] = arr;
//  console.log(a); //one
//  console.log(b); //two
//  console.log(c); //three
//  console.log(d);//undefined
//  console.log(e);//undefined

// // can swap variable values using destructuring
// let a=1;
// let b=2;
// // here we areassigning or swapping a value to b and b value to a
// [b,a] = [a,b];
// console.log(a); //2
// console.log(b);  //1

// const arr= [1,2,3];
// //here we are swapping or giving values of array index 1 to index 2 and index 2 value to index 1
// [arr[2],arr[1]] = [arr[1],arr[2]]; 
// console.log(arr); //[1,3,2]


// // divide or assign a varaiable to returned array of an function 
// function fn(){
//     return [11,22];
// }

// // assigning functions return array values 1 and 2 to variables a and b
// const [a,b] = fn();
// console.log(a); // // 11
// console.log(b); // // 22

// // we can ignore or if we dont want to display a return value of function 
// // we can do it by not assigning that value a variable and leaving it as hole in place of variable
// function f(){
//     return [44,55,88,8];
// }

// const [a,b,,c] =f();
// console.log(a);// 44
// console.log(b);  //55
// console.log(c); //8

// // using ... with a name takes remianing values inside that variable
// const aee = [1,5,6,8,96,36,55];
// const [a,b,...ro] = aee;
// console.log(a);
// console.log(b);
// console.log(ro);

// //binding patterns doubt
// //on iterable

// // object destructuring

const user = {
            id:1,
            name:"Lubna",
            age:25,
            tech:{
                java:"core",
                spring:"boot"
            }
};
//  // assigning user object properties id and name to id name variables same as key name
// // for array we use [] for variables assigning and in objects we use {} for variables assigning
// const {id, name} = user;
// console.log(id); // //1
// console.log(name);// // Lubna

// // if used different variable not same as key 
// const {iden, nu} = user;
// console.log(iden);//undefined
// console.log(nu); //undefined

// // can also assign to different variables name
// const {id: foo, name: na} = user;
// console.log(foo); //  1
// console.log(na); // Lubna

// // can use object properties as parameter in function within a {}
// function fn({name}){
//     return name;
// }
// console.log(fn(user));

// or we can assign key to new variable in function parameter
function f({name,tech:{java: javva}}){
    return {name,javva};
}

console.log(f(user));












