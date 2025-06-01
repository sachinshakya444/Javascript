let myArray = [1,2,3,4,5,6];
let anotherArray = []

let sum=0;

function sumfac(numbers)
{
    for(let i=0;i<numbers.length;i++)
    {
        sum=sum+numbers[i];
    }
    return sum;
}

let result= sumfac(myArray)
console.log(result);

let anotherResult = sumfac([9,4,5,7]);
console.log(`My result is ${anotherResult}`);