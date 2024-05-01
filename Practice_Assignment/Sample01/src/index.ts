

// //print value
// let age: number = 22;
// if (age >= 18) {
//     console.log("You eligible to vote");

// }
// age=45;


// //Type of variable :

// //Number
// let empid : number=4653;
// console.log("Number Type :"+ empid);

// //'number' only refers to a type, but is being used as a value here.
// //number="vallarasu";

// //String
// let comapanyname: string ='syncfusion';
// console.log("String Type :"+ comapanyname);

// //Boolean
// let iscompanyopen:boolean=false;
// console.log("Boolean Type :"+ iscompanyopen);
// //Any

// let x : any=5;
// x='vallarasu';
// console.log("Any Type :"+ x);

// //Cannot assign to 'y' because it is a constant
// const y:number=20;
// //y=5;

// //Array
// let array:number[] = [1,2,3,4,5];
// //Length of array
// console.log("Length of Array "+array.length);

// //printing array element 
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

// array.push(6);
// console.log("Printing the array lements in Foreach");
// array.forEach(element =>
// {
//     console.log(element);
// });

// console.log("Printing  any type of  the array lements in Foreach");
// let array2:any[]=[1,"vallarasu",true]
// array2.forEach(Element=>{console.log(Element)});

// //Tuples
// let employee :[number,string,boolean]=[1,"vallarasu",true]
// console.log(employee[0]);
// console.log(employee[1]);
// console.log(employee[2]);
// //Tuple Array
// console.log("Print Tuple array :");
// let employess :[number,string][]=[[1,'vallarasu'],[2,'mahadevan'],[3,'Tamilarasan']]
// console.log(employess[0][0]);
// console.log(employess[0][1]);
// console.log(employess[1][0]);
// console.log(employess[1][1]);
// console.log(employess[2][0]);
// console.log(employess[2][1]);

// //Union
// let empID:number|string="SF4653";
// console.log(empID);
// empID=4653;
// console.log(empID);

// //Enum
// enum direction
// {
//     up,
//     down,
//     right,
//     left
// }
// console.log(direction.up);
// console.log(direction.down);
// console.log(direction.right);
// console.log(direction.left);

// //Customize the enum types
// enum gender
// {
//    male=5,
//    female,
//    others
// }
// console.log(gender.male);
// console.log(gender.female);
// console.log(gender.others);


//Object

// let cars : {id:number,carname:string}={
//     id:4653,
//     carname:"BMW"
// }
// console.log(cars.id);
// console.log(cars.carname);
// console.log("Alterway")
// // Alterway
// type cartype = {
//     id:number,
//     carname:string,
// }
// let bmw :cartype ={
//     id:6,
//     carname:"Shift"
// }
// console.log(bmw.id);
// console.log(bmw.carname);

// //Type assert
// let x :any =5
// let comid1 = x as number;
// let comid2 = <number>x;
// console.log(comid1);
// console.log(comid2+2);

// //Function

// // With return Type with parameter
// function add(a:number,b:number):number
// {
//     return a+b;
// }

// console.log(add(1,2));
// // With return Type No parameter
// function multiply():number
// {
//     var a=5;
//     var b=2;
//     return a*b;
// }

// console.log(multiply());
// // Without return Type No parameter
// function message():void
// {
//     console.log("Hello ");
// }
// message();
// // Without return Type with parameter
// function sub(a:number,b:number):void
// {
//     console.log("Result :" + (a-b));
// }
// sub(5,2);

//Interface

interface usertype
{
    readonly id:number,
    name:string,
    age?:number
}

let student : usertype =
{
    id:10,
    name:'vallarasu'
    
}

console.log(student.id)
//student.id=4     readonly property
console.log(student.age=22);

interface mathFunc
{
    (a:number,b:number):number
}

let add :mathFunc=(a:number,b:number):number=>a+b;
let sub :mathFunc=(a:number,b:number):number=>a-b;

// Class

class std
{
    id:number=28
    name:string="vallarasu"
    constructor()
    {
        console.log(this.id + " "+this.name);
    }
}
 const student1 = new std();
 const student2 = new std();
 const student3 = new std();

 interface one
 {
    i:number,
    j:number,
    reg():void;
    
 }
 class userdetail implements one
 {
    i:number
    j:number

    constructor(i:number,j:number)
    {
       this.i=i
       this.j=j
    }
    reg(){
        console.log("welcome");
    }
 }
 const user1 = new userdetail(1,2)
console.log(user1.i);
console.log(user1.j);
user1.reg();

class employee extends userdetail
{
    position : string
    constructor(i:number,j:number,position:string)
    {
        super(i,j)
        this.position=position;
    }
}

const emp1= new employee(1,2,"engineer");
console.log(emp1.i);
console.log(emp1.j);
console.log(emp1.position);
emp1.reg();

//Generics
function getArray(items:any[]):any[]
{
    return new Array().concat(items);
}
let numarray = getArray([1,2,3]);
numarray.push("vallarasu");
numarray.forEach(Element=>{console.log(Element)});
let stringarray = getArray(["vallarasu","tamil","siva"]);
stringarray.push(5);
stringarray.forEach(Element=>{console.log(Element)});
// Overcome above probelm
console.log("After inserting generic");
function getArray1<T>(items:T[]):T[]
{
    return new Array().concat(items);
}
let numarray1 = getArray1<number>([1,2,3]);

numarray1.forEach(Element=>{console.log(Element)});
let stringarray1 = getArray1<string>(["vallarasu","tamil","siva"]);

stringarray1.forEach(Element=>{console.log(Element)});



