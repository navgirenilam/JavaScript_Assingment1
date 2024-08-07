//Four types of Variable
//1.var
//2.let
//3.const
//4.noting


//1.var :- Variable can be re-declared and updated.It is global Scope variable.
var a=2;
var b=3;
var a=5;

var c=a+b;
console.log(c);//output print console window is 8


//2.let :- Variable cannot be re-declard but can be updated. It is block scope variable.

let A=2;
let B=3;
let A=5;

let C=A+B;
console.log(C);//error



//3. const :- variable cannot be re-declard or updated.It is block scope of variable.
const pi=3.14;
let r=4;
let cr=pi*r*r;

console.log(cr);



// Data types 

//Number o Numeric    age=24 , A=50 ,a=20, b=0.14,
//String   name="Nilam"  , surname="Navgire"
//Boolean  isfollow= True
