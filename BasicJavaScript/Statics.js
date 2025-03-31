class Empoyee {
    static name;
    static salary;

    static show() {
        console.log(this.name+" "+this.salary);
    }
}

Empoyee.name = "HHH";
Empoyee.salary = 5000;
Empoyee.show();