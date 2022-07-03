var quizdata = [
    {
        question: 'Which framework is related to js?',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct:'a'
    },
    {
        question: 'Which is not a programming language?',
        a: 'html',
        b: 'python',
        c: 'c',
        d: 'javascript',
        correct:'a'
    },
    {
        question: 'css stands for?',
        a: 'cascading style state',
        b: 'cascading style sheet',
        c: 'cascading sheet of style',
        d: 'none',
        correct:'b'
    }
]
var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')
var submitbtn = document.getElementById('submit')
var currentQuestion = 0
var quizscore = 0
loadQuiz()
function loadQuiz() 
{
    deselect()
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerHTML = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d
}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener('click', () => {
    var seloption;
    answer.forEach(answer => {
        if (answer.checked)
        {
            seloption=answer.id
            }
    })
    if (seloption == quizdata[currentQuestion].correct)
    {
        quizscore=quizscore+1
    }
    currentQuestion=currentQuestion+1
    if (currentQuestion == quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML=`<h1>you have answered ${quizscore} correctly among ${quizdata.length}</h1>`
    }
    else {
        loadQuiz()
    }

})

