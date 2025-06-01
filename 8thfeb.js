// Problem: Create an array containing different types of teas
const teas = [
"Green Tea",
"Black Tea",
"Oolong Tea",
'White Tea',
"Herbal Tea",
];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas
const index = teas.indexOf("Oolong Tea");
console.log(index);
if(index>-1)
    teas.splice(index,1);

console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated
const caffeinated = teas.filter((tea)=> tea!="Herbal Tea");

console.log(caffeinated);

// Problem: Sort the list of number order
const test = [4,6,342,6,45];
console.log(test.sort((a,b)=>a-b));

//// Problem: Sort the list of teas in alphabetical order
const s_Sort = ["Sachin","Utkarsh","Abhishek","Vikas"]
console.log(s_Sort.sort());

// Problem: Use a for loop to print each type of tea in the array
for(let i=0;i<teas.length;i++)
{
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")

let caffeinatedMyTeas=0;
for(let i=0;i<teas.length;i++)
{
    if(teas[i]!="Herbal Tea")
        caffeinatedMyTeas++;
}
console.log(`caffeinated teas are ${caffeinatedMyTeas}`);

// Problem: Use a for loop to create a new array with all tea names in uppercase

const uppercaseTeas=[];
for(let i=0;i<teas.length;i++)
{
    uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);

// Problem: Use a for loop to find the tea name with the most characters
let longestTea="";
for(i=0;i<teas.length;i++)
{
    if(teas[i].length>longestTea.length)
        longestTea=teas[i];
}

console.log(longestTea);

// Problem: Use a for loop to reverse the order of the teas in the array

const reversedArray=[];
for(let i=0;i<teas.length;i++)
{
    reversedArray.push(teas[teas.length-i-1]);
}
console.log(reversedArray);