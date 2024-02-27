

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


//CHOISIR ET PUSH AFFIRMATION
function generateAffirmation() {
    let affirmationOfTheDay = variableAffirmations[generateRandomNumber(variableAffirmations.length)];
    return "You are capable of " + affirmationOfTheDay + ". Believe in yourself!";
}


//LOG AFFIRMATION
function displayAffirmation(){
    const affirmation = generateAffirmation();
    document.getElementById('output').innerHTML = `<p>${affirmation}</p>`;
}

//FONCTION AU CLIC
function generateAndDisplayAffirmation(){
    displayAffirmation();
}
