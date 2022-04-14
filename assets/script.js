var quizBox = document.getElementById('quiz');
var resultsBox = document.getElementById('results');
var submitButton = document.getElementById('submit');

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
    }
];

function generateQuiz(questions, quizBox, resultsBox, submitButton) {
    function showQuestions(questions, quizBox){
       var output = [];
    }

    function showResults(questions, quizBox, resultsBox) {
        // code to follow
    }

    //shows questions
    showQuestions(questions, quizBox);

    //click event. Submit = shows results
    submitButton.onclick = function () {
        showResults(questions, quizBox, resultsBox);
    }

}