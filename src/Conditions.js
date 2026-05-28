// Conditions 

const age = 25;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

const dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Tuesday":
        console.log("Second day of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek.");
        break;
    case "Thursday":
        console.log("Almost the weekend.");
        break;
    case "Friday":
        console.log("Last day of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid day of the week.");
}   

