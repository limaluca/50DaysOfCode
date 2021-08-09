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

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz()


function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()

    
    if (answer) checkAnswer(answer);
})

function checkAnswer(answer){
    if (answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length){
        loadQuiz()
    } else {
        quiz.innerHTML = `
            <h2>You answered correctly ${score} of ${quizData.length} questions!<h2>
            <p>Play Again!<p>

        `

    }

}


// ///QUESTAO 1 
// const data = [1,- 2, [3, 4], [5, [6, 7, 8], 9, [10]]];

// const teste1 = [1, [2, 3], 4, [5, 6]]  //[1, 2, 3, 4, 5, 6]);
// const teste2 = [[1, 2, 3]] //.toBe([1, 2, 3]);
// const teste3 = [1, 2, 3] //.toBe([1, 2, 3]);

// function roloCompressor(data){
//     const arrayPlano =[];

//     data.forEach(element => {
//         if (Array.isArray(element)){
			
//             element.forEach(otherElement => {
//                 if(Array.isArray(otherElement)){

//                     otherElement.forEach(anotherElement => {
//                         arrayPlano.push(anotherElement)
//                     })
//                 } else {
//                     arrayPlano.push(otherElement)
//                 }
//             })
			
            
//         } else {
//             arrayPlano.push(element)
//         }
//     });
//     return arrayPlano
// }


// console.log(roloCompressor(teste1))
// console.log(roloCompressor(teste2))
// console.log(roloCompressor(teste3))



// QUESTAO 2

// function phoneNumberWithTen(PhoneNum = []){
//     let res = '';
//     PhoneNum = PhoneNum.map(String);
 
//     res += `(${PhoneNum[0] + PhoneNum[1]}) `;
//     res += `${PhoneNum[2] + PhoneNum[3] + PhoneNum[4] + PhoneNum[5]}-`;
//     res += PhoneNum[6] + PhoneNum[7] + PhoneNum[8] + PhoneNum[9];
//     return res;
//  };

// function PhoneNumWithEleven(PhoneNum = []){
//     let res = '';
//     PhoneNum = PhoneNum.map(String);
 
//     res += `(${PhoneNum[0] + PhoneNum[1]}) `;
//     res += `${PhoneNum[2] + PhoneNum[3] + PhoneNum[4] + PhoneNum[5] + PhoneNum[6]}-`;
//     res += PhoneNum[7] + PhoneNum[8] + PhoneNum[9] + PhoneNum[10];
//     return res;
//  };

// function numberCheck(phoneNumber){
//     const resultNumber = '';
//     if(phoneNumber.length === 10){
//         resultNumber = phoneNumberWithTen(phoneNumber)
//     } else if (phoneNumber.length === 11){
//         resultNumber = phoneNumberWithEleven(phoneNumber)
//     }
//     return resultNumber;
// }


// //******************************  TESTES EM GERAL ******************************

// // teste com 10 numeros
// const tenDigitNumber = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// //teste com 11 numberos
// const elevenDigitNumber = [1,2,3,4,5,6,7,8,9,0,1];
// // teste com mais 
// const menosDe10 = [8, 7, 6, 5, 4, 3, 2, 1, 0]
// //teste com menos
// const maisDe11 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0,9,1]

// let teste10 = numberCheck(menosDe10);
// let teste11 = numberCheck(maisDe11);

// console.log(teste10)

// console.log(teste11)


