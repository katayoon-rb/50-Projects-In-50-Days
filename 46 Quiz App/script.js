const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];



const answerEls = document.querySelectorAll('.answer')
let currentQuiz = 0
let score = 0


loadQuiz()

document.getElementById('submit').addEventListener('click', () => {
    const answer = () => {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) { answer = answerEl.id }
        })
        return answer
    }
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) { score++ }
        currentQuiz++

        if(currentQuiz < quizData.length) { loadQuiz() }
        else {
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})





function loadQuiz() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    const currentQuizData = quizData[currentQuiz]

    document.getElementById('question').innerText = currentQuizData.question
    document.getElementById('a_text').innerText = currentQuizData.a
    document.getElementById('b_text').innerText = currentQuizData.b
    document.getElementById('c_text').innerText = currentQuizData.c
    document.getElementById('d_text').innerText = currentQuizData.d
}