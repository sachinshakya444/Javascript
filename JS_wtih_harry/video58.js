function isName(name){

    console.log(`Hey ${name} you are bad!`)
    console.log(`Hey ${name} you are good!`)
    console.log(`Hey ${name} your tshirt is nice!`)
    console.log(`Hey ${name} your course is good too`)
}

isName("sachin")

function sum(a,b)
{
    console.log(`The sum of these numbers is ${a+b}`)
}

sum(5,4)


function sum2(a,b,c=3){
    console.log(`sum is ${a+b+c}`)
}

sum2(5,6);
sum2(3);   //NaN
sum(5,6,1)

//Arrow function
let z=10;
const func1 = (z)=>{
    console.log("I am an arrow function",z)
}

func1(55);
func1(5);


