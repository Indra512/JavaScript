// Constructure function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName+" "+this.lastName;
    }
}

let person = new Person("Indra", "Prajapati");
console.log(person.firstName);
console.log(person.fullName());

