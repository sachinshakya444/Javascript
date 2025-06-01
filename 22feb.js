const fruits = [1,2,3,4];
// console.log(fruits[-1]); undefined , negative indexing
// what is curring?
// fast paced

// var name = "sachin"   //don't take this 
let name = "Sachin"
const pi = 3.14;

// primitives data type
let number = 42; // Number
let text = "Hello" //String
let isTrue = true  //Boolean
let nothing = null //object
let undefinedVar ; //undefined
let symbolVAr = Symbol(); //Symbol

console.log(typeof nothing);
console.log(typeof undefinedVar);
console.log(typeof symbolVAr)

// OBJECTS

let person = {
    name: "Sachin",
    age: 24,
    isStudent: true
}

// some times we need to convert data into other data format like string to number
let num = "44";
let convertedNum = Number(num);

console.log(convertedNum);
console.log(typeof convertedNum);

let num2 = "44a";
let convertedNum2 = Number(num2);

console.log(convertedNum2);  // here it gives NaN i.e not a number
console.log(typeof convertedNum2);

// so we can restrict data if it is NAN 

// another ways to convert
// let num = "42";
// let convertedNum = Number(num);
// let convertedNum = +num;
// let convertedNum = parseInt(num);


let str = 123;
let convertedString = String(str);


// OPERATIONS
let a = 10;
let b = 2;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// == Check data
// === check data type also

let x = 10;
let y = 10;
console.log(x == y)
console.log(x != y)
console.log(x > y)
console.log(x < y)
console.log(x <= y);


console.log(Math.max(3,443,543,23));
console.log(Math.min(3,443,543,23));
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(4))
console.log(Math.floor(Math.random()*10))


let firstName = "Sachin"
let lastName = "Shakya"

let fullName = firstName + " " + lastName;

let message = "Hello World"
console.log(message.length);
console.log(message.toLocaleLowerCase());
console.log(message.toUpperCase());
console.log(message.indexOf("W"));
console.log(message.slice(0,7));

let myName = "Sachin";

let greeting = `Hello ${myName}, from chaicode`;

// Array

let chaiTypes = ["Masala Chai","Ginger chai","Green Tea","lemon Tea"];

console.log(chaiTypes[2]);

console.log(`Total chai Types : &=${chaiTypes.length}`);

chaiTypes.push("Herbal Tea");
console.log(chaiTypes.pop())

let index = chaiTypes.indexOf("Green Tea");
console.log(index);

if(index != -1)
{
    chaiTypes.splice(index,1);
}

if(index != -1)
{
    chaiTypes.splice(index,1)
}
console.log(chaiTypes);


chaiTypes.forEach((chai,index)=>{console.log(`${index + 1}: ${chai}`)})




