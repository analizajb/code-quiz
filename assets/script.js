var button = document.getElementById('button')
button.innerText = 'Start Quiz',
button.onclick = function() {
     alert('Your quiz starts now!');
}

var quizBox = document.getElementById('quiz');
var resultsBox = document.getElementById('results');
var submitButton = document.getElementById('submit');
 //Use client-side storage to store high scores
 //localStorage.getItem("score");
 //sessionStorage.getItem("score");
 
 // TIMER
 //document.getElementsByClassName('.timer') {
 //    setInterval = 1000
//}
var quizQuestions = [
     {
         question: "What does DOM stand for?",
         answers: {
             1: 'Display On Machine',
             2: 'Digital Open Mechanism',
             3: 'Document On Modem',
             4: 'Document Object Model'
         },
         correctAnswer: '4: Document Object Model'
     },
     {
         question: "Where can JavScript code NOT be placed in an HTML document?",
         answers: {
             1: 'In the head section.',
             2: 'In both the head and body section.',
             3: 'In the footer section.',
             4: 'In the body section.'
         },
         correctAnswer: '3: In the footer section.'
     },
     {
         question: "Select the statement that is true of arrays in Javascript",
         answers: {
             1: 'Arrays are used to organize content within a list element.',
             2: 'Arrays are elements that are resizable and able to contain different data types.',
             3: 'Arrays are objects that are resizable and able to contain different data types.',
             4: 'An array is a list of items with single variables.'
         },
         correctAnswer: '3: Arrays are objects that are resizable and able to contain different data types.'
     },
     {
        question: "Fixed values are called...",
        answers: {
            1: 'Fixated.',
            2: 'Literals.',
            3: 'Values.',
            4: 'JavaScript.'
        },
        correctAnswer: '2: Literals.'
    },
 ];
 
 
function generateQuiz(questions, quizBox, resultsBox, submitButton) {
     function showQuestions(questions, quizBox){
        var output = [];
        var answers;
 
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(number in questions [i].answers){
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+number+'">'
                    + number + ': '
                    + questions[i].answers[number]
                 + '</label>'
                );
             }
             
             output.push(
              questions[i].question + answers.join('')
             );
         }
 
         quizBox.innerHTML = output.join('');
     }
 
     function showResults(questions, quizBox, resultsBox) {
         var answersContainer = quizBox.querySelectorAll('answers');
         var userAnswer = '';
         var numCorrect = 0;
 
         for(var i=0; i<questions.length; i++){
             // finds answer
             userAnswer = (answersContainer[i].querySelector('input[name=question0'+i+']:checked')||{}).value;
             //if correct answer
             if(userAnswer===questions[i].correctAnswer){
                 //adds to number of correct answers
                 numCorrect++;
                 //color the answers blue
                 answersContainer[i].style.color = 'lightblue';
             }
             else{
                 answersContainer[i].style.color = 'red';
             }
         }
 
         resultsBox.innerHTML = numCorrect + ' out of ' + questions.length;
     }
 
     //shows questions
     showQuestions(questions, quizBox);
 
 }


//Submit button - NOT WORKING
submitButton.onclick = function () {
        showResults(questions, quizBox, resultsBox);
    }


//var buttonEl = document.querySelector("#submit");
//console.log(buttonEl);

// COUNTDOWN TIMER
//var counter = 10
//var countdown = function () {
 //   console.log(counter);
  //  counter--;
 //       if(counter === 0){
 //           console.log("Time's Up!");
   //         clearInterval(startCountdown);
 //       };
//};

//var startCountdown = setInterval(countdown, 1000);


//Create variables to store the quiz questions

//Use mouse-click events to start the quiz

//Write for loops to cycle through quiz questions

//Use key-press events to receive user input in the form of answers to quiz questions

//Create a time limit for the game using time functions

//Write conditional statements to determine wrong and right answers

//Use client-side storage to store high scores

//Use GitHub Pages to publish the page to the web