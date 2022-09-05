const quizData = [
    {
      question: "Which of the following is one of the 4 main types of pollution? ",
      a: "Air pollution ",
      b: "Water pollution",
      c: "Land pollution ",
      d: "All of the above",
       correct: "d",
     },
      
     {
      question: "Why is plastic dangerous for marine life? ",
      a: "They mistake it for food and cannot digest it ",
       b: "They can get tangled in it which hinders their ability to swim ",
      c: "Bacteria on plastic can give coral diseases ",
      d: "All of the above",
      correct: "d",
     },
      
          {
          question: "How are microplastics (plastics that are less than 5 millimeters long) a threat to crustaceans? ",
          a: "Microplastics are not a threat to crustaceans because they are biodegradable and safe to digest. ",
          b: "Microplastics are so small that they do not post any harm to crustaceans or humans. ",
          c: "Microplastics can damage organs and increase exposure to toxic chemicals. This can threaten immune function, growth and reproduction. This has potentially larger implications up the food chain for humans. ",
          d: "None of the above. ",
          correct: "c",
          },
      
          {
          question: "Poaching is a severe threat to elephants. How many elephants are killed for their tusks? ",
          a: "50 per day. ",
          b: "175 per day. ",
          c: "100 per day. ",
          d: "15 per day. ",
          correct: "c",
          },
      
          {
          question: "What can you do to help protect coral reefs? ",
          a: "Buy and use oxybenzone and octinoxate-free sunscreen. ",
          b: "Avoid purchasing coral. ",
          c: "Choose seafood that has been sustainably sourced. ",
          d: "All of the above. ",
          correct: "d",
          },
      
          {
          question: "What is an endangered species? ",
          a: "A type of organism that is at risk of extinction.",
          b: "A species found on land and in the ocean..",
          c: "A species that is threatened by prey. ",
          d: "All of the above. ",
          correct: "a",
          },
      
          {
          question: "Global forests removed how much of the global human fossil fuel emissions annually from 1990 to 2007? ",
          a: "65%",
          b: "33%",
          c: "5%",
          d: "50%",
          correct: "b",
          },
      
      
          {
            question: "Which of the following is NOT a problem caused by deforestation?",
            a: "Loss of biodiversity",
            b: "Hurting the economy",
            c: "The harming of many indigenous peoples",
            d: "They are all problems caused by deforestation",
            correct: "d",
          },
      
          {
            question: "What can you do to fight deforestation?",
            a: "Leave forests standing and plant more trees",
            b: "Reduce your use of products made from wood fiber including paper and cardboard",
            c: "Demand forest products from sustainable sources and deforestation free supply chains",
            d: "All of the above",
            correct: "d",
          },
          
          {
            question: " How many trees does it take to provide a day's supply of oxygen for 4 people?",
            a: "1",
            b: "10",
            c: "50",
            d: "100",
            correct: "a",
          }    
      
  ];
  
  
  const quiz= document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
  
      deselectAnswers()
  
      const currentQuizData = quizData[currentQuiz]
  
      questionEl.innerText = currentQuizData.question
      a_text.innerText = currentQuizData.a
      b_text.innerText = currentQuizData.b
      c_text.innerText = currentQuizData.c
      d_text.innerText = currentQuizData.d
  }
  
  function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
      let answer
      answerEls.forEach(answerEl => {
          if(answerEl.checked) {
              answer = answerEl.id
          }
      })
      return answer
  }
  
  
  submitBtn.addEventListener('click', () => {
      const answer = getSelected()
      if(answer) {
         if(answer === quizData[currentQuiz].correct) {
             score++
         }
  
         currentQuiz++
  
         if(currentQuiz < quizData.length) {
             loadQuiz()
         } else {
             quiz.innerHTML = `
             <h2>Congratulations! You answered ${score}/${quizData.length} questions correctly. We will donate $${score} to Enviromental Protection NGOs.</h2>
             
  
             <button onclick="location.reload()">Thank You!</button>
             `
         }
      }
  });