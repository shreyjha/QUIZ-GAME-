let questions = [
    {
        'question': "What does the abbreviation HTML stands for?",
        'answers': [
            {option: "HyperText Markup Language", correct: true},
            {option: "HighText Markup Language", correct: false},
            {option: "HyperText Markdown Language", correct: false},
            {option: "None of the above", correct: false}],
        'topic': "HTML"
    },
    {   
        'question': "HTML files are saved by default with the extension?",
        'answers': [
            {option: ".html", correct: true},
            {option: ".h", correct: false},
            {option: ".ht", correct: false},
            {option: "None of the above", correct: false}],
        'topic': "HTML"

    },
    {
        'question': "The full form of CSS is : ",
        'answers': [
            {option: "Cascading Style Sheets", correct: true},
            {option: "Coloured Special Sheets", correct: false},
            {option: "Color and Style Sheets", correct: false},
            {option: "None of the above", correct: false}],
        'topic': "CSS"
    },
    {
        'question': "How can we select an element with a specific ID in CSS?",
        'answers': [
            {option: "#", correct: true},
            {option: ".", correct: false},
            {option: ">", correct: false},
            {option: "None of the above", correct: false}],
        'topic': "CSS"
    },
    {
        'question': "JavaScript is an ______ language?",
        'answers': [
            {option: "Object-Oriented", correct: true},
            {option: "Object-Based", correct: false},
            {option: "Procedural", correct: false},
            {option: "None of the above", correct: false}],
        'topic': "JavaScript"
    },
    {
        'question': "Which of the following is not a JavaScript framework?",
        'answers': [
            {option: "Vue", correct: false},
            {option: "React", correct: false},
            {option: "Node", correct: false},
            {option: "Laravel", correct: true}],
        'topic': "JavaScript"
    },
    {
        'question': "In which year was the Python language developed?",
        'answers': [
            {option: "1995", correct: false},
            {option: "1972", correct: false},
            {option: "1981", correct: false},
            {option: "1989", correct: true}],
        'topic': "Python"
    },
    {
        'question': "How many keywords are there in C language?",
        'answers': [
            {option: "32", correct: true},
            {option: "33", correct: false},
            {option: "64", correct: false},
            {option: "18", correct: false}],
        'topic': "Python"
    },
    {
        'question': "Number of primitive data types in Java are?",
        'answers': [
            {option: "6", correct: false},
            {option: "7", correct: false},
            {option: "8", correct: true},
            {option: "9", correct: false}],
        'topic': "Java"
    },
    {
        'question': "Identify the incorrect constructer type.",
        'answers': [
            {option: "Friend constructor", correct: true},
            {option: "Default constructor", correct: false},
            {option: "Parameterized constructer", correct: false},
            {option: "Copy constructor", correct: false}],
        'topic': "Java"
    },
]

let quesEl = document.getElementById("question")
let ansEl = document.querySelectorAll(".ans-btn")
let topicEl = document.getElementById("topic")

let playGame = document.getElementById("play-game")
let nextQues = document.getElementById("next-question")

let opBtn1 = document.getElementById("btn-1")
let opBtn2 = document.getElementById("btn-2")
let opBtn3 = document.getElementById("btn-3")
let opBtn4 = document.getElementById("btn-4")

let startGames = document.getElementById("start-games")
let finishGames = document.getElementById("finish-games")
let finalScore = document.getElementById("final-score")

let questionCount = document.getElementById("count-box")

let submitBtn = document.getElementById("submit-btn")

let fScore = document.getElementById("f-score")
let fMessage = document.getElementById("final-message")

function startGame() {
    quesEl.innerHTML = questions[0].question
    ansEl[0].innerHTML = questions[0].answers[0].option
    ansEl[1].innerHTML = questions[0].answers[1].option
    ansEl[2].innerHTML = questions[0].answers[2].option
    ansEl[3].innerHTML = questions[0].answers[3].option
    topicEl.innerHTML = questions[0].topic
    count = 0
    nextQues.style.visibility = "visible"
    startGames.style.visibility = "hidden"
    playGame.style.display = "none"

    questionCount.innerHTML = "1"
}

let count = 0

let correctCount = 0

function nextQuestion() {
    count += 1
    if(count <= 9) {
        questionCount.innerHTML = count + 1
    
    quesEl.innerHTML = questions[count].question
    ansEl[0].innerHTML = questions[count].answers[0].option
    ansEl[1].innerHTML = questions[count].answers[1].option
    ansEl[2].innerHTML = questions[count].answers[2].option
    ansEl[3].innerHTML = questions[count].answers[3].option
    topicEl.innerHTML = questions[count].topic
    playGame.style.visibility = "hidden"

    opBtn1.style.backgroundColor = "#525CEB"
    opBtn2.style.backgroundColor = "#525CEB"
    opBtn3.style.backgroundColor = "#525CEB"
    opBtn4.style.backgroundColor = "#525CEB"

    opBtn1.style.color = "white"
    opBtn2.style.color = "white"
    opBtn3.style.color = "white"
    opBtn4.style.color = "white"

    opBtn1.style.borderBottomColor = "#383FA1"
    opBtn2.style.borderBottomColor = "#383FA1"
    opBtn3.style.borderBottomColor = "#383FA1"
    opBtn4.style.borderBottomColor = "#383FA1"
    }

    if(count === 10) {
        nextQues.style.display = "none"
        submitBtn.style.visibility = "visible"
        finishGames.style.visibility = "visible"
    }
}

function checkAnswer1() {
    if(questions[count].answers[0].correct === true) {
        // console.log("Answer A found!")
        opBtn1.style.backgroundColor = "green"
        opBtn1.style.borderBottomColor = "darkgreen"
        
        correctCount += 1
    }

    else {
        opBtn1.style.backgroundColor = "red"
        opBtn1.style.borderBottomColor = "darkred"
    }

    opBtn2.style.backgroundColor = "white"
    opBtn3.style.backgroundColor = "white"
    opBtn4.style.backgroundColor = "white"

    opBtn2.style.color = "black"
    opBtn3.style.color = "black"
    opBtn4.style.color = "black"

    opBtn2.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn3.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn4.style.borderBottomColor = "rgb(161, 161, 161)"
}

function checkAnswer2() {
    if(questions[count].answers[1].correct === true) {
        // console.log("Answer B found!")
        opBtn2.style.backgroundColor = "green"
        opBtn2.style.borderBottomColor = "darkgreen"

        correctCount += 1
    }

    else {
        opBtn2.style.backgroundColor = "red"
        opBtn2.style.borderBottomColor = "darkred"
    }

    opBtn1.style.backgroundColor = "white"
    opBtn3.style.backgroundColor = "white"
    opBtn4.style.backgroundColor = "white"

    opBtn1.style.color = "black"
    opBtn3.style.color = "black"
    opBtn4.style.color = "black"

    opBtn1.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn3.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn4.style.borderBottomColor = "rgb(161, 161, 161)"
}

function checkAnswer3() {
    if(questions[count].answers[2].correct === true) {
        // console.log("Answer C found!")
        opBtn3.style.backgroundColor = "green"
        opBtn3.style.borderBottomColor = "darkgreen"

        correctCount += 1
    }

    else {
        opBtn3.style.backgroundColor = "red"
        opBtn3.style.borderBottomColor = "darkred"
    }

    opBtn1.style.backgroundColor = "white"
    opBtn2.style.backgroundColor = "white"
    opBtn4.style.backgroundColor = "white"

    opBtn1.style.color = "black"
    opBtn2.style.color = "black"
    opBtn4.style.color = "black"

    opBtn1.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn2.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn4.style.borderBottomColor = "rgb(161, 161, 161)"
}

function checkAnswer4() {
    if(questions[count].answers[3].correct === true) {
        // console.log("Answer D found!")
        opBtn4.style.backgroundColor = "green"
        opBtn4.style.borderBottomColor = "darkgreen"

        correctCount += 1
    }

    else {
        opBtn4.style.backgroundColor = "red"
        opBtn4.style.borderBottomColor = "darkred"
    }

    opBtn1.style.backgroundColor = "white"
    opBtn2.style.backgroundColor = "white"
    opBtn3.style.backgroundColor = "white"

    opBtn1.style.color = "black"
    opBtn2.style.color = "black"
    opBtn3.style.color = "black"

    opBtn1.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn2.style.borderBottomColor = "rgb(161, 161, 161)"
    opBtn3.style.borderBottomColor = "rgb(161, 161, 161)"
}

function submitGame() {
finalScore.style.visibility = "visible" 

finishGames.style.visibility = "hidden"
finishGames.style.color = "white"

submitBtn.style.visibility = "hidden"
submitBtn.style.backgroundColor = "white"
submitBtn.style.borderBottomColor = "white"
submitBtn.style.color = "white"

fScore.innerHTML = `YOUR SCORE : ${correctCount}/10`

if (correctCount >= 8) {
    fMessage.innerHTML = `GOOD JOB!`
}

else if (correctCount >= 5 && correctCount <= 7) {
    fMessage.innerHTML = `YOU ALMOST GOT IT!`
}

else {
    fMessage.innerHTML = `TRY AGAIN!`
}
}

