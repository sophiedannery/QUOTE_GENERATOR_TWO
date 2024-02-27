

// LISTE DES AFFIRMATIONS
const variableAffirmations = 
[
    "achieving your goals",
    "creating positive change",
    "overcoming challenges",
    "finding joy in every moment",
    "attracting success and abundance"
];


// GENERATE RANDOM NUMBER
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}



// CHOISIR UNE AFFIRMATION
let affirmationOfTheDay = variableAffirmations[generateRandomNumber(variableAffirmations.length)];

//PUSH AFFIRMATION DANS QUOTE
let finaleQuote = "You are capable of " + affirmationOfTheDay + ". Believe in yourself!"

//LOG QUOTE
console.log(finaleQuote);
