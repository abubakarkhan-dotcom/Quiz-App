const quizData = [
{
    question: "Which one is NOT a programming language?",
    answers: ["JavaScript", "HTML", "Python", "C++"],
    correct: "HTML"
},
{
    question: "What does HTML stand for?",
    answers: [
        "Hyper Text Markup Language",
        "Hyperlinks Text Marking Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language"
    ],
    correct: "Hyper Text Markup Language"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "/* */", "<!-- -->", "#"],
    correct: "//"
},
{
    question: "Which of the following is used to style a webpage?",
    answers: ["CSS", "SQL", "C#", "PHP"],
    correct: "CSS"
},
{
    question: "Which of these is used to declare a variable in JavaScript?",
    answers: ["let", "var", "const", "All of the above"],
    correct: "All of the above"
}
]

let questionE1 = document.querySelector('#question');
let answersE1 = document.querySelector('#answers');
let nextBtn = document.getElementById('nextBtn');
let result = document.getElementById('result');
let timerDisplay = document.getElementById('timer');


let index = 0;
let score = 0;
let selectedAnswer = ''
let timer;
let countDown;

function startTimer(){
    countDown = 15;
    timer = setInterval( () =>{
        countDown--;

        timerDisplay.textContent = `Time : ${countDown}`

        if (countDown > 6) {
            timerDisplay.style.color = 'green';
        }else{
            timerDisplay.style.color = 'red'
        }

        if(countDown <= 0){
            clearInterval(timer)
            nextBtn.click()
        }

        
    }, 1000)
}



function loadQuestion(){
    let q = quizData[index];
    questionE1.textContent = q.question;
    answersE1.textContent = " ";

    q.answers.forEach(answer =>{
        const btn = document.createElement('button');
        btn.textContent = answer
       btn.addEventListener('click', ()=>{
         
        selectedAnswer = answer;
        document.querySelectorAll('#answers button').forEach(b =>{
            b.style.background = '';
        })
        btn.style.backgroundColor = 'green'
       })
        answersE1.appendChild(btn)
    })

    clearInterval(timer);
    startTimer()
}

loadQuestion();

nextBtn.addEventListener('click', () =>{
    // if (!selectedAnswer) {
    //     alert('select answer')
    //     return
    // }

    if (selectedAnswer === quizData[index].correct) {
        score++;
    }

    index++;
    selectedAnswer = ''

    if (index < quizData.length) {
        loadQuestion()
    }else{
        questionE1.innerHTML = 'Quiz completed!'
        answersE1.innerHTML = ''
        nextBtn.style.display = 'none'
        timerDisplay.style.display = 'none'

        result.innerHTML = `your score = ${score} / ${quizData.length}`
    }
})

