const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')



startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
nextQuestion ()
}

function nextQuestion() {


}

function selectAnswer() {

}

const questions = [
    {
        question: 'In Javascript what bracket is used for objects?',
        answers: [
            {text: '[]', correct: true },
            {text: '{}', correct: false},
            {text: '{}', correct: false},
            {text: '{}', correct: false}
            ]
    }
]
