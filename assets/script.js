const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')
const header = document.querySelector("header");
var timerElement = document.getElementById("timer");
var timeLimit = 60;



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", function() {
    header.style.display = "none";
  });
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

function updateTimer() {
    
    timeLimit--;
    timerElement.innerHTML = "Time remaining: " + timeLimit + " seconds";
  
    if (timeLimit == 0) {
      clearInterval(timer);
      timerElement.innerHTML = "Time is up!";
    } else {
      setTimeout(updateTimer, 1000);
    }
  }

function startGame() {
updateTimer();
timerElement.style.display = "block";
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
nextQuestion ()
}



function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }

    

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'In Javascript what bracket is used for objects?',
        answers: [
            {text: '[]', correct: true },
            {text: '{}', correct: false},
            {text: '()', correct: false},
            {text: '<>', correct: false}
            ]
    },
    {
    question: 'In Javascript, how do you interact with a button element?',
        answers: [
                {text: 'add a if statement', correct: false },
                {text: 'add an event listener', correct: true},
                {text: 'it just works', correct: false},
                {text: '<>', correct: false}
                ]
    },
    {
        question: 'In Javascript what is edited in place of the HTML?',
        answers: [
                 {text: 'The CSS file', correct: false },
                {text: 'The HTML', correct: false},
                {text: 'The DOM', correct: true },
                 {text: 'Nothing is edited', correct: false}
                 ]
    },
    {
        question: 'In Javascript can you put a function inside another function?',
        answers: [
                    {text: 'yes', correct: true },
                    {text: 'no', correct: false},
                    {text: 'sometimes', correct: false},
                    {text: 'with an event listener', correct: false}
                    ]
    },
    {
        question: 'In Javascript what bracket is used for arrays?',
        answers: [
                    {text: '//', correct: false },
                    {text: '{}', correct: false},
                    {text: '[]', correct: true},
                    {text: '<>', correct: false}
                    ] 
                }  
]



