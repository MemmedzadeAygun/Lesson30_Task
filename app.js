class Person{
    constructor(surname,name,age){
        this.surname=surname;
        this.name=name;
        this.age=age;
    }

    changeName(newName){
        this.name=newName;
        return this.name;
    }
}

class Admin extends Person{
    constructor(surname,name,age,role,salary){
        super(surname,name,age);
        this.role=role;
        this.salary=salary;
    }
}

class Player extends Person{
    constructor(surname,name,age,id){
        super(surname,name,age);
        this.id=id;
    }
}

let person=new Person("William","Jessica",30);
console.log(person);
person.changeName("Aygun");
console.log(person);


let admin=new Admin("Wick","Jhon",25,"admin",3000);
console.log(admin);
admin.changeName("Larry");
console.log(admin);


let player=new Player("Smith","Jhon",26,1001);
console.log(player);
player.changeName("Gleen");
console.log(player);


console.log("--------------------------------");    //Task1,2



