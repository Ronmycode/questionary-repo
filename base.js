//selectors

const title = document.getElementById("questionTitle");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const res = document.getElementById("res");
const disp = document.getElementById("disp");
//setting questrions

let questions = [{
    question: "insert question #1",
    choiceA: "insert op1",
    choiceB: "insert op2",
    choiceC: "insert op3",
    correct: "A"
},{
    question: "insert question #2",
    choiceA: "insert op1",
    choiceB: "insert op2",
    choiceC: "insert op3",
    correct: "A"
},{
    question: "insert question #3",
    choiceA: "insert op1",
    choiceB: "insert op2",
    choiceC: "insert op3",
    correct: "A"
}]

// creating variables
const lastquestion = questions.length -1;
let runningquestion = 0;
let count = 0;


renderQuestion();

//render question
function renderQuestion(){
    let q = questions[runningquestion];

    title.innerHTML = "<p><h1>"+q.question+"</h1></p>";
    op1.innerHTML = q.choiceA;
    op2.innerHTML = q.choiceB;
    op3.innerHTML = q.choiceC;
}


//render progress
function prog(){
    if (runningquestion < lastquestion){
        runningquestion ++;
        renderQuestion();
    }else{
        results();
    }
}

// results

function results(){
    res.style.display = "block";
    disp.style.display = "none";   
    res.innerHTML = "<p><h1>YA TUVO</h1></p>";
}