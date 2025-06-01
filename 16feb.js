Function.prototype.describe = function(){
    console.log(`Funtion name is ${this.name}`);
}

function greet(name)
{
    return `Hello ${name}`;
}

console.log(greet("sachin"));

greet.describe('hitesh')
 function masalaChai(){}
 function gingerChai(){}

 masalaChai.describe();
 gingerChai.describe();


function add(a,b){
    return a+b;
}

const substract = function(a,b){
    return  a-b;
}

const multiply = (a,b)=>a*b;

function applyOperation(a,b,operation){        //first class function
    return operation(a,b)
}

console.log(add(5,2));
console.log(substract(5,2));
console.log(multiply(5,2));
// console.log(applyOperation(5,2));


const result = applyOperation(5,4,(x,y)=>x/y)

console.log(result);                 

function createCounter(){
    let count = 0; 
    return function(){                 //tiffin concept
        count++;
    }
}

// console.log(count);

const counter = createCounter()
console.log(counter());