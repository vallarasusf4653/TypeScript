"use strict";
let student = {
    id: 10,
    name: 'vallarasu'
};
console.log(student.id);
console.log(student.age = 22);
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
class std {
    constructor() {
        this.id = 28;
        this.name = "vallarasu";
        console.log(this.id + " " + this.name);
    }
}
const student1 = new std();
const student2 = new std();
const student3 = new std();
class userdetail {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
    reg() {
        console.log("welcome");
    }
}
const user1 = new userdetail(1, 2);
console.log(user1.i);
console.log(user1.j);
user1.reg();
class employee extends userdetail {
    constructor(i, j, position) {
        super(i, j);
        this.position = position;
    }
}
const emp1 = new employee(1, 2, "engineer");
console.log(emp1.i);
console.log(emp1.j);
console.log(emp1.position);
emp1.reg();
function getArray(items) {
    return new Array().concat(items);
}
let numarray = getArray([1, 2, 3]);
numarray.push("vallarasu");
numarray.forEach(Element => { console.log(Element); });
let stringarray = getArray(["vallarasu", "tamil", "siva"]);
stringarray.push(5);
stringarray.forEach(Element => { console.log(Element); });
console.log("After inserting generic");
function getArray1(items) {
    return new Array().concat(items);
}
let numarray1 = getArray1([1, 2, 3]);
numarray1.forEach(Element => { console.log(Element); });
let stringarray1 = getArray1(["vallarasu", "tamil", "siva"]);
stringarray1.forEach(Element => { console.log(Element); });
