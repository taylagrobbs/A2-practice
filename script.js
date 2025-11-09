let myAge = +prompt("Enter your age:");

if (myAge >= 18) {
alert("You are an adult.");
} else {
    alert("You are a minor.");
}   

for (i = 1; i<=10; i++) {
    alert(i);
}   

let season = prompt("Enter a season (spring, summer, autumn, winter):");
if (season === "spring") 
{
    alert("it is springtime!")
} else if (season === "summer") {
    alert("it is summer!")
} else if (season === "autumn") {
    alert("it is autumn!")
} else if (season === "winter") {
    alert("it is winter!")
} else {
    alert("invalid season")
}   

switch (season) {
    case "spring":
        alert("it is springtime!")
        break;
    case "summer":
        alert("it is summer!")
        break;
    case "autumn":
        alert("it is autumn!")
        break;
    case "winter":
        alert("it is winter!")
        break;
    default:
        alert("invalid season")
}

let userNumber = +prompt("Enter a number:");
if (userNumber === 5 || userNumber === 13 || userNumber % 3 ===0)
    {
        alert("your number meets criteria");
    }

function isPositive(number)
{
    return number > 0;
}



