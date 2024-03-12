const max = prompt("Enter the maximun number");


const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == 'quit') {
        console.log("Thanks for playing");
        break;
    }
    
    if(guess == random) {
        console.log("you guessed the number",random);
        break;
    }
    
    else  if(guess < random){
        guess = prompt("hint : your guess was too small. try again");
    }
    else {
        guess = prompt("hint : your guess was too large. try again");
    }
}