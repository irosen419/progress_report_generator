const comments = document.querySelectorAll('p');
let selfWords = document.getElementsByClassName('self');
let pronounWords = document.getElementsByClassName('pronoun1');
let firstPronounWords = document.getElementsByClassName('pronoun1first');
let pronoun2Words = document.getElementsByClassName('pronoun2');
let pronoun3Words = document.getElementsByClassName('pronoun3');
let firstPronoun3Words = document.getElementsByClassName('pronoun3first');
let firstName = document.getElementsByClassName('fname');
const studentsName = document.getElementById('name').value;
let finalReport = document.getElementById('report').innerText; 
// let progressReport = null;
const commentArray = []

//Event Handlers
const handleCommentClick = function concat(e) {
    commentArray.push(e.path[0].innerText);
    let progressReport = commentArray.join(" ");
    document.getElementById('report').innerText = progressReport;
};


// Event Listeners
for (let i = 0; i < comments.length; i++) {
    comments[i].addEventListener('click', handleCommentClick);
}

function clickEnter() {
    var inputVal = document.getElementById('name').value;
    for (let i = 0; i < firstName.length; i++) {
        firstName[i].innerText = inputVal;
    }
}

// Functions

function chooseGenderMale() {
    for (let i = 0; i < selfWords.length; i++) {
        selfWords[i].innerHTML = 'himself';
    }
    for (let i = 0; i < pronounWords.length; i++) {
        pronounWords[i].innerHTML = 'his';
    }
    for (let i = 0; i < pronoun2Words.length; i++) {
        pronoun2Words[i].innerHTML = 'him';
    }
    for (let i = 0; i < firstPronounWords.length; i++) {
        firstPronounWords[i].innerHTML = 'His ';
    }
    for (let i = 0; i < pronoun3Words.length; i++) {
        pronoun3Words[i].innerHTML = 'he';
    }
    for (let i = 0; i < firstPronoun3Words.length; i++) {
        firstPronoun3Words[i].innerHTML = 'He ';
    }
}

function chooseGenderFemale() {
    for (let i = 0; i < selfWords.length; i++) {
        selfWords[i].innerHTML = 'herself';
    }
    for (let i = 0; i < pronounWords.length; i++) {
        pronounWords[i].innerHTML = 'her';
    }
    for (let i = 0; i < pronoun2Words.length; i++) {
        pronoun2Words[i].innerHTML = 'her';
    }
    for (let i = 0; i < firstPronounWords.length; i++) {
        firstPronounWords[i].innerHTML = 'Her ';
    }
    for (let i = 0; i < pronoun3Words.length; i++) {
        pronoun3Words[i].innerHTML = 'she';
    }
    for (let i = 0; i < firstPronoun3Words.length; i++) {
        firstPronoun3Words[i].innerHTML = 'She ';
    }
}

function changeName() {
    for (let i = 0; i < firstName.length; i++) {

    }
}