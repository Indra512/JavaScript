/*let person = {
    firstName: "Indra",
    lastName: "Prajapati"
}

console.log(person["firstName"]);
console.log(person.lastName);

Add
person["age"] = 26;
console.log(person.age);

Modify
person.age = 29;
console.log(person["age"]);

Delete
delete person.age;
console.log(person.age);

Print all
for (p in person) {
    console.log(p+": "+person[p]);
} */

    // function is in object
let person = {
    firstName: "Indra",
    lastName: "Prajapati",
    age: 26,
    fullName: function full() {
        return this.firstName +" "+this.lastName;
    },
    printFullName: function printFull() {
        console.log(this.firstName+" "+this.lastName+" "+this.age);
    }
}

console.log(person.fullName());
person.printFullName();