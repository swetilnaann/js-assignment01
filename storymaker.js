// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const noun1Display = document.getElementById('choosenNoun1');
const verbDisplay = document.getElementById('choosenVerb');
const adjectiveDisplay = document.getElementById('choosenAdjective');
const noun2Display = document.getElementById('choosenNoun2');
const settingDisplay = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const storyDisplay = document.getElementById('story');
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.textContent = nouns1[noun1Count];
    if (noun1Count + 1 >= nouns1.length) {
        noun1Count = 0;
    } else {
        noun1Count++;
    }
}

function verb_on_click() {
    verbDisplay.textContent = verbs[verbCount];
    if (verbCount + 1 >= verbs.length) {
        verbCount = 0;
    } else {
        verbCount++;
    }
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjectives[adjectiveCount];
    if (adjectiveCount + 1 >= adjectives.length) {
        adjectiveCount = 0;
    } else {
        adjectiveCount++;
    }
}

function noun2_on_click() {
    noun2Display.textContent = nouns2[noun2Count];
    if (noun2Count + 1 >= nouns2.length) {
        noun2Count = 0;
    } else {
        noun2Count++;
    }
}

function setting_on_click() {
    settingDisplay.textContent = settings[settingCount];
    if (settingCount + 1 >= settings.length) {
        settingCount = 0;
    } else {
        settingCount++;
    }
}
// concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent}  ${noun2Display.textContent} ${settingDisplay.textContent}.`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = getRandomElement(nouns1);
    const randomVerb = getRandomElement(verbs);
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun2 = getRandomElement(nouns2);
    const randomSetting = getRandomElement(settings);

    storyDisplay.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective}  ${randomNoun2} ${randomSetting}.`;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// reset button functionality

function reset_on_click() {
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;

    noun1Display.textContent = "";
    verbDisplay.textContent = "";
    adjectiveDisplay.textContent = "";
    noun2Display.textContent = "";
    settingDisplay.textContent = "";
    storyDisplay.textContent = "";
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset_on_click);