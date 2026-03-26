const choices: string[] = ["Rock", "Paper", "Scissors"];
const user_choice: (string | undefined) = choices[Math.floor(Math.random() * choices.length)];
const bot_choice: (string | undefined) = choices[Math.floor(Math.random() * choices.length)];
const rules: Record<string, string> = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
}

console.log("Welcome to Rock Paper Scissors");
console.log("----------------");
console.log("You Are The", user_choice);
console.log("The Bot Is The", bot_choice);
if(user_choice && bot_choice){
    if(user_choice == bot_choice){
        console.log("Draw.");
    }
    else if (rules[user_choice] == bot_choice){
        console.log("You Win.");
    }
    else {
        console.log("You Lose.");
    }
}