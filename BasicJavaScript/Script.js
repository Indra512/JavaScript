// Variables
document.write("<h1>This is my first comment</h1>");
document.write("<h2>This is my second comment</h2>");
console.log("Hello JavaScript!");
console.log("My name is Indra")
a = 10
console.log(a)
console.log(typeof (a))
a = true
console.log(a)
console.log(typeof (a))
a = "Test"
console.log(a)
console.log(typeof (a))
let b = {
    firstName: "Indra",
    lastName: "Prajapati"
}
console.log(b.firstName)
console.log(typeof (b))

// loops
var i = 1;
while(i <= 10) {
    document.writeln(i);
    i++;
}

var i = 1;
do {
    document.writeln(i);
    i++;
} while(i <=10);

var sum=0;
for (let i=1;i<=10;i++, sum+=i) {
    document.writeln(i);
}
for (let i=1;i<=10;i++, sum+=i);
document.writeln(sum);
