const quizData = [
  {
    question:
      "Which of the following best describes the correct action we should take in school?",
    options: [
      "A. We should be punctual.",
      "B. We should be tardy.",
      "C. We should be rude.",
      "D. We should be absent.",
    ],
    answer: "A. We should be punctual.",
  },
  {
    question:
      "What is the correct advice for your friend to go to the dentist?",
    options: [
      "A. You must go to the dentist.",
      "B. You should go to the dentist.",
      "C. You have to go to the dentist.",
      "D. You shall go to the dentist.",
    ],
    answer: "B. You should go to the dentist.",
  },
  {
    question:
      "Which option best describes the action that someone may do for money?",
    options: ["A. Should", "B. Must", "C. Can", "D. Could"],
    answer: "A. Should",
  },
  {
    question: "What is the best advice for taking a raincoat?",
    options: ["A. Must", "B. Would", "C. Ought to", "D. Could"],
    answer: "A. Must",
  },
  {
    question: "What warning should you give your brother regarding the switch?",
    options: [
      "A. You should not touch the switch with wet hands.",
      "B. You must not touch the switch with wet hands.",
      "C. You may not touch the switch with wet hands.",
      "D. You could not touch the switch with wet hands.",
    ],
    answer: "B. You must not touch the switch with wet hands.",
  },
  {
    question: "Which word is the best synonym for 'hale'?",
    options: ["A. Sickly", "B. Frail", "C. Weak", "D. Healthy"],
    answer: "D. Healthy",
  },
  {
    question: "Which word is similar in meaning to 'awful'?",
    options: [
      "A. Entertaining",
      "B. Terrible",
      "C. Courageous",
      "D. Intelligent",
    ],
    answer: "B. Terrible",
  },
  {
    question: "Which word is closest in meaning to 'admit'?",
    options: ["A. Confess", "B. Except", "C. Attend", "D. Dissent"],
    answer: "A. Confess",
  },
  {
    question: "Which word is closest in meaning to 'abandon'?",
    options: ["A. Postpone", "B. Attain", "C. Forsake", "D. Finish"],
    answer: "C. Forsake",
  },
  {
    question: "Which word is a synonym for 'outrageous'?",
    options: ["A. Lengthy", "B. Boring", "C. Interesting", "D. Fantastic"],
    answer: "C. Interesting",
  },
  {
    question: "Which word is an antonym of 'flourish'?",
    options: ["A. Proliferate", "B. Grow", "C. Prosper", "D. Deficient"],
    answer: "D. Deficient",
  },
  {
    question: "Which word is an antonym of 'artificial'?",
    options: ["A. Natural", "B. Coloured", "C. Withered", "D. Plastic"],
    answer: "A. Natural",
  },
  {
    question: "Which word is an antonym of 'foremost'?",
    options: ["A. Midmost", "B. Unimportant", "C. Disposed", "D. Mature"],
    answer: "B. Unimportant",
  },
  {
    question: "Which word is an antonym of 'precaution'?",
    options: ["A. Ceaseless", "B. Staunch", "C. Carelessness", "D. Surround"],
    answer: "C. Carelessness",
  },
  {
    question:
      "Which option is the correct meaning of the sentence 'The legend was sickened instantly'?",
    options: [
      "A. The legend kick ed the bucket to soon.",
      "B. The legend fell sick suddenly.",
      "C. The legend made an untimely mistake.",
      "D. The legend got annoyed too soon.",
    ],
    answer: "B. The legend fell sick suddenly.",
  },
  {
    question:
      "Which determiner is appropriate for the sentence 'Once upon time there were _________ dinosaurs'?",
    options: ["A. Much", "B. Many", "C. Most", "D. Money"],
    answer: "B. Many",
  },
  {
    question:
      "Which article is correct to complete the sentence 'The child was thrilled to have ____ unicorn cake'?",
    options: ["A. An", "B. A", "C. The", "D. All of the above"],
    answer: "D. All of the above",
  },
  {
    question:
      "Complete the sentence with the suitable determiner: 'Can ____ help me?'",
    options: ["A. Many", "B. Nobody", "C. Everybody", "D. Somebody"],
    answer: "D. Somebody",
  },
  {
    question:
      "Which option is correct to complete the sentence '_of the deadlines is met'?",
    options: ["A. Neither", "B. No", "C. Non", "D. Much"],
    answer: "A. Neither",
  },
  {
    question:
      "Which option is correct to complete the sentence 'Sharmila wanted to read about _______ funny schools'?",
    options: ["A. Much", "B. One", "C. Those", "D. These"],
    answer: "B. One",
  },
  {
    question:
      "Which option is the correct passive voice of the sentence 'The guards will have locked the gates'?",
    options: [
      "A. The gates will have been locked by the guards.",
      "B. The gates will be locked by the guards.",
      "C. The gates are going to be locked by the guards.",
      "D. The gates will have been locking by the guards.",
    ],
    answer: "A. The gates will have been locked by the guards.",
  },
  {
    question:
      "Which option is the correct passive voice of the sentence 'The ring master is training the lions'?",
    options: [
      "A. The lions were trained by the ring master.",
      "B. The li ons are being trained by the ring master.",
      "C. The lions were being trained by the ring master.",
      "D. The lions have been trained the ring master.",
    ],
    answer: "B. The li ons are being trained by the ring master.",
  },
  {
    question:
      "Which option is the correct passive voice of the sentence 'Who teaches you English?'",
    options: [
      "A. Who is t aught English by you?",
      "B. Who is being t aught by you English?",
      "C. By whom are you t aught English?",
      "D. By whom is t aught you English?",
    ],
    answer: "C. By whom are you t aught English?",
  },
  {
    question: "Which sentence is in the active voice?",
    options: [
      "A. The cake was packed by the chef.",
      "B. The chef baked the cake.",
      "C. The book was written by the author.",
      "D. The floor was cleaned by the maid.",
    ],
    answer: "B. The chef baked the cake.",
  },
];

const quizContainer = document.getElementById("quiz-container");
const numQuestionsInput = document.getElementById("num-questions");
const pageSize = 4; // Number of questions per page
let currentPage = 1;
let selectedQuestions = [];
let submitted = false; // Flag to track if the quiz has been submitted

function startQuiz() {
  const numQuestions = parseInt(numQuestionsInput.value);
  selectedQuestions = quizData.slice(0, numQuestions);
  displayQuestions();
}

function displayQuestions() {
  quizContainer.innerHTML = ""; // Clear previous questions
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageQuestions = selectedQuestions.slice(startIndex, endIndex);
  pageQuestions.forEach((questionData, index) => {
    const { question, options } = questionData;

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("div");
    questionText.textContent = `Question ${
      startIndex + index + 1
    }: ${question}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    options.forEach((option, optionIndex) => {
      const optionLabel = document.createElement("label");
      optionLabel.textContent = `${option}`;
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question-${startIndex + index}`;
      optionInput.value = option;
      optionLabel.appendChild(optionInput);
      optionsDiv.appendChild(optionLabel);
    });
    questionDiv.appendChild(optionsDiv);

    quizContainer.appendChild(questionDiv);
  });

  // Add pagination buttons
  const totalPages = Math.ceil(selectedQuestions.length / pageSize);
  const paginationDiv = document.createElement("div");
  paginationDiv.classList.add("pagination");

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", () => {
      currentPage--;
      displayQuestions();
    });
    paginationDiv.appendChild(prevButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
      currentPage++;
      displayQuestions();
    });
    paginationDiv.appendChild(nextButton);
  }

  quizContainer.appendChild(paginationDiv);

  // Show submit button on the last page if not already submitted
  if (currentPage === totalPages && !submitted) {
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Exam";
    submitButton.addEventListener("click", () => {
      showResults();
      submitted = true; // Set submitted flag to true
      submitButton.disabled = true; // Disable the button after submission
    });
    paginationDiv.appendChild(submitButton);
  }
}

function showResults() {
  let score = 0;
  selectedQuestions.forEach((questionData, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (selectedOption) {
      const selectedAnswer = selectedOption.value;
      if (selectedAnswer === questionData.answer) {
        score++;
      }
    }
  });

  const numQuestions = selectedQuestions.length;

  const resultsDiv = document.createElement("div");
  resultsDiv.id = "results";
  resultsDiv.innerHTML = `<h1>Your Score: ${score}/${numQuestions}</h1>`;
  quizContainer.appendChild(resultsDiv);
}

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);
