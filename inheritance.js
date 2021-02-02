class Parent{
    constructor(){
        this.fatherName = 'Niloy Hussain';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}
const baby = new Child('Rima');
const baby2 = new Child('Lima');
console.log(baby.getFullName());
console.log(baby2.getFullName());

// object oriented programming core concept = inheritance, abstraction, polymorphism, encapsulation;