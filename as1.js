
var prompt = require('prompt-sync')();

let no1 = parseInt (prompt(" Enter the ist no "));
let no2 = parseInt(prompt(" Enter the 2nd no "));
if(no1>no2){
    console.log("The greater no betwwen two is ", no1)
}
else if(no1<no2){
    console.log("The greater no betwwen two is ", no2)
}
else{
    console.log("the both no are equal",no1+ " = "+ no2)
}



let no = parseInt (prompt(" Enter the ist no "));
if(no<0){
    alert("The sign is - ")
}
else if(no=>0){
    alert("The sign is + ")
}
else{
    alert("wrong ")
}




let num1 = parseInt (prompt(" Enter the ist no "));
let num2 = parseInt(prompt(" Enter the 2nd no "));
let num3 = parseInt (prompt(" Enter the 3rd no "));
let num4 = parseInt(prompt(" Enter the 4th no "));
let num5 = parseInt(prompt(" Enter the 5th no "));
console.log( "The larger no is ", Math.max(num1,num2,num3,num4,num5));


for(i=0;i<=15;i++){
    if(i%2===0){
    console.log(i," is even");
}
else {
    console.log(i,"is odd");
}}



let grades=parseInt(prompt("Enter the grades "));
 if (grades<60) {
    console.log("Grade F ");
}
else if (grades<70) {
    console.log("Grade D");
}

else if (grades<80) {
    console.log("Grade C");
}

else if (grades<90) {
    console.log("Grade B");
}
else {
    console.log("Grade A");
}

 for(let i=1;i<=100;i++){
 if(i %3 ===0){
    console.log("Fizz");
}
else if(i%5===0){
    console.log("Buzz");
}
else if(i%3===0 && i%5===0){
console.log("FizzBuzz");
 }
 else{
    console.log(i)
 }}


let q1=parseInt(prompt(" Enter the ist no "));
let q2=""
for(let i=1;i<=q1;i++){
    for(let j=1;j<=i;j++){
        q2+="*";
    }
    q2+="\n"
}
console.log(q2)