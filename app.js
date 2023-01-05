//using selectors inside the element
// traversing the dom

const questionBtns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

// questionBtns.forEach(function (questionBtn, btnIndex) {
//     questionBtn.addEventListener('click', function () {
//         questions.forEach(function (question, questionIndex) {
//             if (btnIndex == questionIndex) {
//                 question.classList.toggle('show-text');
//             } else {
//                 question.classList.remove('show-text');
//             }
//         })
//     })
// })

questionBtns.forEach((questionBtn, btnIndex) => {
    questionBtn.addEventListener('click', () => {
        questions.forEach((question, questionIndex) => {
            if (btnIndex == questionIndex) {
                question.classList.toggle('show-text');
            } else {
                question.classList.remove('show-text');
            }
        })
    })
})
