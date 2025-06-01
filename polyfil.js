const arr=[1,2,5,4,6,8];
const arr2=[10,22,44,55,99];
console.log(arr.length);
const another = [];
another.push(arr[1]);
console.log(arr);
console.log(another);
let index =2;
console.log(`arr of ${index} at element is ${arr.at(index)}`);
index=-3
console.log(`arr of ${index} at element is ${arr.at(index)}`);

// Array.concat()

const arr3 = arr.concat(arr2);
console.log(arr3);

//Array.copywithin()

const array1 = ["a", "b", "c", "d", "e"];

console.log(array1.copyWithin(0,3,4));

Object.prototype.chai=function()
{
    console.log('mera new function')
}

const a = {
    x: 1,
    y: 6
}
a.chai();
console.log(a.x);

    Array.prototype.myfill = function() {return "sachin"};

const arr5 = [2,434,23,4];
console.log(arr5.myfill());

const num1 = [1,2,3,4,5,6];

// const ret = num1.forEach(function(value,index1))
// {
//     console.log(`value at Index ${index1} is ${value}`)
// }

// let fruits = ['banana','apple','papaya']
// console.log(fruits);
// fruits = ['mango',...fruits];
// console.log(fruits);

let fruits = ['banana','apple','papaya']
console.log(fruits);
// fruits = ['mango'].concat(fruits);
// console.log(fruits);
 fruits.shift();
 console.log(fruits);
 fruits.unshift("guava");
 console.log(fruits)
 fruits.push("lemon")
 console.log(fruits);
//  let newfruits = fruits.slice(1);
//  console.log(newfruits);
//  console.log(fruits);
//  fruits.splice(0,1);
//  console.log(fruits);

fruits.sort();
console.log(fruits);
fruits.sort().reverse();
console.log(fruits);


