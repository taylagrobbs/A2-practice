/*Q1
let myString = "hello";
let myBoolean = true;
let myNumber = 42;

//Q2
15 > 10; // true, 15 is greater than 10
10 === 10; // true, 10 is equal to 10
15 < 20; // true, 15 is less than 20
4 !== 5; // true, 4 is not equal to 5
50 <= 50; // true, 50 is less than or equal to 50

//Q3
console.log('5 * 4 = ${5 * 4}');

//Q4
String(123);
'${123}';

//Q5
(true && false) || !false;

//Q6
function isPositive(number) {
    return number > 0;
}

//Q7
for (let j = 1, j <= 10, j++)
{
    console.log(j);
}
let k = 1;
while (k<=10)
{
    console.log(k);
    k++;
}

//Q8
let userNumber = prompt("Enter a number:");
if (userNumber === 5 || userNumber === 13 || userNumber % 3 === 0)
{
    console.log("the number meets the criteria");
}

let name = "Tayla";
let age = 25;
let isStudent = true;
console.log(`My name is ${name}, I am ${age} years old. Student: ${isStudent}`);*/

let age = +prompt("Enter your age:");
if (age >= 18)
{
    alert("Welcome");
} else 
{
    alert("Access denied");
}




