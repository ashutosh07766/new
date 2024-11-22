
document.getElementById('submit').addEventListener('click', () =>
     {
    const quizForm = document.getElementById('quiz');
    const answers = quizForm.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    answers.forEach(answer => {
        if (answer.value === 'correct') {
            score++;
        }

    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You got ${score} out of 5 correct! `;
   
    
});
document.getElementById('restart').addEventListener('click', () =>
     {
    const quizForm = document.getElementById('quiz');
    quizForm.reset(); 
    document.getElementById('result').textContent = ''; 
});