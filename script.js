


document.getElementById("mode-quiz-btn").addEventListener("click", () => {
  document.getElementById("mode-edit").classList.add("ocultar");
  document.getElementById("mode-quiz").classList.remove("ocultar");
});


document.getElementById("mode-edit-btn").addEventListener("click", () => {
  document.getElementById("mode-quiz").classList.add("ocultar");
  document.getElementById("mode-edit").classList.remove("ocultar");
});

   // estructura de datos de preguntas 
const preguntas = [
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    options: ["6", "7", "8", "9"],
    answerIndex: 2,
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Saturno", "Júpiter", "Neptuno", "Tierra"],
    answerIndex: 1,
  },
  {
    question: "¿Cómo se le conoce al planeta Marte?",
    options: ["El planeta azul", "El planeta rojo", "El planeta anillado", "El planeta enano"],
    answerIndex: 1,
  },
  {
    question: "¿Cuál es el planeta donde vivimos?",
    options: ["Venus", "Marte", "Tierra", "Mercurio"],
    answerIndex: 2,
  },
  {
    question: "¿Qué planeta tiene anillos muy visibles?",
    options: ["Saturno", "Mercurio", "Tierra", "Marte"],
    answerIndex: 0,
  },
];


                                                                                  
                                                                                
function mostrarPreguntas() {
  const display = document.getElementById("espacio-preguntas");

  let html = "";

  // for para todas las preguntas 
  for (let indice = 0; indice < preguntas.length; indice++) {
    const pregunta = preguntas[indice];

    html += `
      <h2 id="question-text">${pregunta.question}</h2>
      <div id="options-container">
    `;

    // como son varias opciones de cada pregunta
    // esto tambien flexible para el nuemro de opciones
    for (let i = 0; i < pregunta.options.length; i++) {
      html +=
        '<label>' +
        '<input type="radio" name="option-' + indice + '" data-option="' + i + '" value="' + i + '" />' +
        pregunta.options[i] +
        '</label>';
    }

    html += `</div>
    <div class="separador"></div>

    `;
  }

  display.innerHTML = html;
}


mostrarPreguntas();
