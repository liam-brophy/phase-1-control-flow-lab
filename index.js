function scuberGreetingForFeet(ride){
  //Everything I want my function to do 
  let greeting 
  if (ride <= 400) {
    greeting = "This one is on me!";
} else if (ride > 400 && ride <= 2000){
  greeting = "That will be twenty bucks.";
}
  else if (ride > 2000  && ride < 2500 ) {
    greeting = "I will gladly take your thirty bucks.";
}
else if (ride > 2500 ) {
  greeting = "No can do.";
}
else {
  greeting = false;
}

return greeting;
}




function ternaryCheckCity(city){
  const destination = city === "NYC" ? "Ok, sounds good." : "No go.";

  return destination;
}






function switchOnCharmFromTip(tip){

let response;

switch (tip) {
    case "generous":
        response = "Thank you so much.";
        break;
    case "not as generous":
        response = "Thank you.";
        break;
    default:
        response = 'Bye.';
}
return response;
}
