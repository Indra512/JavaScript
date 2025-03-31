function print() {
    console.log("Hello");
}
print();

function add(a, b) {
    console.log(a+b);
}
add(5,10);

function sub(a, b){
    return a-b;
}
let subt = sub(10,5);
console.log(subt)

let a = (x, y) => x+y;
console.log(a(10,5));
