const Startbutton = document.getElementById('startbtn');
const Nextbutton = document.getElementById('nextbtn');
const QstnContEl = document.getElementById('qstncont');
const questionEl = document.getElementById('questioncon');
const AnswerEl = document.getElementById('answrbtn');

var score = 0;

let randomquestion, questionIndex;

const questions = [
    {
        question: "Who is the drummer of Tool?",
        answers: [
            {text: 'Neil Pert', correct: false },
            {text: "Danny Carrey", correct: true },
            {text: 'Keith Moon', correct: false },
            {text: 'John Bonham', correct: false },
        ]
    },
    {
        question: "What is the name of Linkin Park's breakthrough record?",
        answers: [
            {text: 'Hybrid Theory', correct: true },
            {text: 'Aenima', correct: false },
            {text: 'White Pony', correct: false },
            {text: "Three Dollar Bill, Y'all", correct: false },
        ]
    },
    {
        question: "What vocalist turned down being the lead singer for Led Zeppelin?",
        answers: [
            {text: 'Neil Young', correct: false },
            {text: 'Robert Plant', correct: false },
            {text: 'Terry Reid', correct: true },
            {text: 'Dave Grohl', correct: false },
        ]
    },
    {
        question: "Christopher George Latore Wallace is better known by what name?",
        answers: [
            {text: 'Tupac', correct: false },
            {text: 'Scarface', correct: false },
            {text: 'Rza', correct: false },
            {text: 'Biggie Smalls', correct: true },
        ]
    }

]

Startbutton.addEventListener('click', startGame);

function starttime(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (secconds === 0){
            alert('Game Over')
        }
    }, 1000);
}

Startbutton.addEventListener('click', startGame);
Startbutton.addEventListener('click', function () {
    var twomins = 60 * 2,
    display = document.querySelector('#time');
    startTimer (twomins, display);
});

function startGame () {
    Startbutton.classList.add ('hide');
    randomquestion = questions.sort(() => Math.random() - .5);
    questionEl.classList.remove('hide');
    questionIndex = 0;
    Nextquestion();
    Nextbutton.classList.remove('hide');

}

function Showquestion(questions) {
    questionEl.innerText = questions.question
    console.log(questions)
    questioncon.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        AnswerEl.appendChild(button)
         
    })
}

function resetquiz() {
    clearStatusClass(document.body)
    Nextbutton.classList.add('hide')
    while (AnswerEl.firstChild) {
        AnswerEl.removeChild(AnswerEl.firstChild)
    }
}

function questionsloop(questions) {

    for (var i = 0; i < questions.length; i++);
    questions.innerText('#question');
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText('Correct')
}

function Nextquestion() {
    Showquestion(randomquestion[questionIndex]);
}