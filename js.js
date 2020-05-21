const comments = document.querySelectorAll('.comments p');
let selfWords = document.getElementsByClassName('self');
let pronounWords = document.getElementsByClassName('pronoun1');
let firstPronounWords = document.getElementsByClassName('pronoun1first');
let pronoun2Words = document.getElementsByClassName('pronoun2');
let pronoun3Words = document.getElementsByClassName('pronoun3');
let firstPronoun3Words = document.getElementsByClassName('pronoun3first');
let firstName = document.getElementsByClassName('fname');
const studentsName = document.getElementById('name').value;
let finalReport = document.getElementById('report').innerText;
const commentArray = [];

//Event Handlers
const handleCommentClick = function concat(e) {
    let comment = e.target;
    commentArray.push(comment.innerText);
    document.getElementById('report').innerText = commentArray.join(" ");
    comment.style.color = "blue";
    comment.style.fontWeight = "bold";
    comment.removeEventListener('click', handleCommentClick);
};

const handleCommentDoubleClick = function unconcat(e) {
    let comment = e.target;
    comment.style.color = "black";
    comment.style.fontWeight = "normal";
    commentArray.splice(commentArray.indexOf(comment.innerText), 1);
    document.getElementById('report').innerText = commentArray.join(" ");
    comment.addEventListener('click', handleCommentClick);
}


// Event Listeners
for (let i = 0; i < comments.length; i++) {
    comments[i].addEventListener('click', handleCommentClick);
}

for (let i = 0; i < comments.length; i++) {
    comments[i].addEventListener('dblclick', handleCommentDoubleClick);
}

// Functions

function clickEnter() {
    var inputVal = document.getElementById('name').value;
    for (let i = 0; i < firstName.length; i++) {
        firstName[i].innerText = inputVal;
    }
}

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