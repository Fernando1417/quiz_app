

document.getElementById("mode-quiz-btn").addEventListener("click", () => {
  document.getElementById("mode-add").classList.add("ocultar");
    document.getElementById("mode-edit").classList.add("ocultar");
  document.getElementById("mode-quiz").classList.remove("ocultar");
});


document.getElementById("mode-edit-btn").addEventListener("click", () => {
  document.getElementById("mode-add").classList.add("ocultar");
    document.getElementById("mode-edit").classList.remove("ocultar");
  document.getElementById("mode-quiz").classList.add("ocultar");
});


document.getElementById("mode-add-btn").addEventListener("click", () => {
  document.getElementById("mode-add").classList.remove("ocultar");
  document.getElementById("mode-edit").classList.add("ocultar");
    document.getElementById("mode-quiz").classList.add("ocultar");
});

   // estructura de datos de preguntas 
const preguntas = [
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    options: ["6", "7", "8", "9"],
    respuestaIndex: 2,
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Saturno", "Júpiter", "Neptuno", "Tierra"],
    respuestaIndex: 1,
  },
  {
    question: "¿Cómo se le conoce al planeta Marte?",
    options: ["El planeta azul", "El planeta rojo", "El planeta anillado", "El planeta enano"],
    respuestaIndex: 1,
  },
  {
    question: "¿Cuál es el planeta donde vivimos?",
    options: ["Venus", "Marte", "Tierra", "Mercurio"],
    respuestaIndex: 2,
  },
  {
    question: "¿Qué planeta tiene anillos muy visibles?",
    options: ["Saturno", "Mercurio", "Tierra", "Marte"],
    respuestaIndex: 0,
  },
];


                                                                                  
                                                                                
function mostrarPreguntas() {
  const display = document.getElementById("espacio-preguntas");

  let html = "";

  // for para todas las preguntas 
  for (let indice = 0; indice < preguntas.length; indice++) {
    const pregunta = preguntas[indice];



    // dentro de for deberia usar class no ID en este for 
    html += `
      <h2 class="question-text">${pregunta.question}</h2> 
      <div class="options-container" data-indice="${indice}">
    `;

    // como son varias opciones de cada pregunta
    // esto tambien flexible para el nuemro de opciones
    for (let i = 0; i < pregunta.options.length; i++) {
      // este for puede ser su propia funcion 
      html +=
        '<label>' +
        '<input type="radio" name="option-' + indice + '" data-option="' + i + '" value="' + i + '" />' +
        pregunta.options[i] +
        '</label>';
    }

    html += `</div>
    <button class="revisar-btn" data-indice="${indice}">Revisar</button>

    <div class="separador"></div>

    `;
  }

  display.innerHTML = html;
}



// crear contadores para llevar control

let respondidas = 0;
let correctas = 0;

function mostrarResultados() {

  document.getElementById("espacio-resultados").textContent = 
  "Respondidas: " + respondidas + "/" + preguntas.length + " · Correctas: " + correctas;
}

function marcaOpcion(opcionesContainer, pregunta){
  // marcar cada opcion como correcta o incorrecta
  const opciones = opcionesContainer.querySelectorAll("input[type='radio']");
  opciones.forEach((opcion) => {
    const label = opcion.closest("label");
    if (Number(opcion.value) === pregunta.respuestaIndex) {
      label.classList.add("opcion-correcta");
    } else if (opcion.checked) {
      label.classList.add("opcion-incorrecta");
    }

  });
}

document.getElementById("espacio-preguntas").addEventListener("click", (evento) => {

  // que sea boton
  if (!evento.target.classList.contains("revisar-btn")) return;

  const boton = evento.target;
  const indice = Number(boton.dataset.indice);
  const pregunta = preguntas[indice];

  // el contendio 
  const opcionesContainer = document.querySelector(
    '.options-container[data-indice="' + indice + '"]'
  );

  //el input seleccionado 
  const seleccionado = opcionesContainer.querySelector(
    'input[name="option-' + indice + '"]:checked'
  );


  const esCorrecta = Number(seleccionado.value) === pregunta.respuestaIndex;

    respondidas++;
  if (esCorrecta) correctas++;

marcaOpcion(opcionesContainer, pregunta)

mostrarResultados();
});





mostrarPreguntas();



// guardar pregunta nueva




document.getElementById("guardar-btn").addEventListener("click", (evento) => {


  const questionInput = document.getElementById("question-input");
  const optionInputs = document.querySelectorAll(".option-input");
  const correctOptionInput = document.querySelector('input[name="correct"]:checked');

  const nuevaPregunta = {
    question: questionInput.value,
    options: Array.from(optionInputs).map((input) => input.value),
    respuestaIndex: Number(correctOptionInput.value),
  };

  preguntas.push(nuevaPregunta);

  mostrarPreguntas(); // muy imporate! crear esto
  mostrarPreguntasEdit() 
});


// editar 

                                                                                
function mostrarPreguntasEdit() {
  const display = document.getElementById("espacio-edit");

  let html = "";

  // for para todas las preguntas
  for (let indice = 0; indice < preguntas.length; indice++) {
    const pregunta = preguntas[indice];

    html += `
      <div class="edit-container" data-indice="${indice}">
        <input type="text" class="edit-question-input" value="${pregunta.question}" />
    `;

    // un input de texto por opcion + un radio para marcar cual es la correcta
    for (let i = 0; i < pregunta.options.length; i++) {
      const checked = i === pregunta.respuestaIndex ? "checked" : "";
      html +=
        '<div class="edit-option-row">' +
        '<input type="text" class="edit-option-input" data-option="' + i + '" value="' + pregunta.options[i] + '" />' +
        '<label>' +
        '<input type="radio" name="edit-correct-' + indice + '" value="' + i + '" ' + checked + ' /> correcta' +
        '</label>' +
        '</div>';
    }

    html += `
        <button class="guardar-edit-btn" data-indice="${indice}">Guardar</button>
      </div>

      <div class="separador"></div>
    `;
  }

  display.innerHTML = html;
}

// guardar los cambios de una pregunta existente
// esta es la parte complicada 
document.getElementById("espacio-edit").addEventListener("click", (evento) => {
  // si no es el boton de editar, salir
  if (!evento.target.classList.contains("guardar-edit-btn")) return;

  // consigo el indece
  const indice = Number(evento.target.dataset.indice);
  const editContainer = document.querySelector(
    '.edit-container[data-indice="' + indice + '"]'
  );

  //repito la parte de nueva pregunta 
  const questionInput = editContainer.querySelector(".edit-question-input");
  const optionInputs = editContainer.querySelectorAll(".edit-option-input");
  const correctInput = editContainer.querySelector(
    'input[name="edit-correct-' + indice + '"]:checked'
  );

  preguntas[indice].question = questionInput.value;
  preguntas[indice].options = Array.from(optionInputs).map((input) => input.value);
  preguntas[indice].respuestaIndex = Number(correctInput.value);

  mostrarPreguntas();
  mostrarPreguntasEdit();
});

mostrarPreguntasEdit();

