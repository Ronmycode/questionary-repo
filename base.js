// setting questions
const question = document.getElementById("question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");


let questions = [
    {
        question: "mato tunco tu tata?",
        choiceA: "what's that?",
        choiceB: "noablou spaniol..",
        choiceC: "le tuviste miedo?"
    },{
        question: "y vos por que sos asi?",
        choiceA: "what's that?",
        choiceB: "noablou spaniol..",
        choiceC: "a vos que te valga..?"
    }
]

const lastquestion = questions.length -1;
let runningquestion = 0;

//render question
function renderquestion(){
    
    let q = questions[runningquestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML =     q.choiceA;
    choiceB.innerHTML =     q.choiceB;
    choiceC.innerHTML =     q.choiceC;
    
}

renderquestion();