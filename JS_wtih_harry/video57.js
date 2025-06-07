console.log("I am a tutorial on LOOps")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

for (let I = 0; I < 100; I++) {
    console.log(a+I);

}

//for in loop

let obj = {
    name:"Sachin",
    role:"Programmer",
    company:"CodewithPegasis"
}

for (const key in obj) {
    {
        const element = obj[key];
        console.log(key,element)
    }
}

// for of loop
const s = "Sachin"
for (const iterator of s) {
    console.log(iterator)
}

//while loop

let i=0;
while(i<6)
{
    console.log(i)
    i++;
}

// do while loop
let p=10
do {
    console.log(p)
    p++
} while (p<6);