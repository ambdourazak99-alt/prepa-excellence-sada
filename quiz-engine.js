let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[current].question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  quiz[current].options.forEach((option, index) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;
    div.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(div);
  });
}

function checkAnswer(index) {
  if(index === quiz[current].answer){
    alert("Bonne réponse !");
  } else {
    alert("Mauvaise réponse");
  }
  current++;
  if(current < quiz.length){
    loadQuestion();
  } else {
    alert("Quiz terminé");
  }
}

loadQuestion();