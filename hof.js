function temp(fn){

    fn(a,b);
}
function add(a,b){
    console.log(a+b);
}

console.log(temp(add(3,2)));
