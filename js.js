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
let tense = document.getElementsByClassName('tense');
let tenseHash = { 'struggles': 'struggle', 'has': 'have', 'needs': 'need', 'tends': 'tend' }
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

const handlePressEnter = function pressEnter(e) {
    if (e.key === 'Enter') {
        clickEnter();
    }
};

// Event Listeners
for (let i = 0; i < comments.length; i++) {
    comments[i].addEventListener('click', handleCommentClick);
}

for (let i = 0; i < comments.length; i++) {
    comments[i].addEventListener('dblclick', handleCommentDoubleClick);
}

document.addEventListener('keydown', handlePressEnter);

document.getElementById('selfWritten').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        var inputComment = document.getElementById('selfWritten').value;
        commentArray.push(inputComment);
        document.getElementById('report').innerText = commentArray.join(" ");
    }
    
});


// Functions

function enterComment() {
    var inputComment = document.getElementById('selfWritten').value;
        commentArray.push(inputComment);
        document.getElementById('report').innerText = commentArray.join(" ");
}

function clickEnter() {
    var inputName = document.getElementById('name').value;
    for (let i = 0; i < firstName.length; i++) {
        firstName[i].innerText = inputName;
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
    for (let tense1 of Object.keys(tenseHash)) {
        var tense2 = tenseHash[tense1];
        for (let i = 0; i < tense.length; i++) {
            if (tense2 === tense[i].innerText) {
                tense[i].innerText = tense1;
            }
        }
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
    for (let tense1 of Object.keys(tenseHash)) {
        var tense2 = tenseHash[tense1];
        for (let i = 0; i < tense.length; i++) {
            if (tense2 === tense[i].innerText) {
                tense[i].innerText = tense1;
            }
        }
    }
}

    
function chooseNonBinary() {
    
    for (let i = 0; i < selfWords.length; i++) {
        selfWords[i].innerHTML = 'themself';
    }
    for (let i = 0; i < pronounWords.length; i++) {
        pronounWords[i].innerHTML = 'their';
    }
    for (let i = 0; i < pronoun2Words.length; i++) {
        pronoun2Words[i].innerHTML = 'them';
    }
    for (let i = 0; i < firstPronounWords.length; i++) {
        firstPronounWords[i].innerHTML = 'Their ';
    }
    for (let i = 0; i < pronoun3Words.length; i++) {
        pronoun3Words[i].innerHTML = 'they';
    }
    for (let i = 0; i < firstPronoun3Words.length; i++) {
        firstPronoun3Words[i].innerHTML = 'They ';
    }
    for (let tense1 of Object.keys(tenseHash)) {
        var tense2 = tenseHash[tense1];
        for (let i = 0; i < tense.length; i++) {
            if (tense1 === tense[i].innerText) {
                tense[i].innerText = tense2;
            }
        }
    }
}

function undoComment() {
    for (let i = 0; i < comments.length; i++) {
        console.log(comments[i].innerText)
        if (comments[i].innerText === commentArray[commentArray.length - 1]) {
            console.log("Hello!")
            comments[i].style.color = "black";
            comments[i].style.fontWeight = "normal";
            comments[i].addEventListener('click', handleCommentClick);
        }
    }
    commentArray.splice(commentArray.length - 1, 1);
    document.getElementById('report').innerText = commentArray.join(" ");
}