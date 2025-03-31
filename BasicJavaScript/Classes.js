class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // details() {
    //     this.firstName = "Indra";
    //     this.lastName = "Prajapati";
    // }
    // details(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    display() {
        console.log(this.firstName + " "+this.lastName);
    }
}

let person = new Person("CM", "Punk");
// person.details("CM", "Punk");
person.display();
// person.details("John", "Cena");
// person.display();