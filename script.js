


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
    question: "colores?",
    options: ["azul", "verde", "rojo", "púrpura"],
    answerIndex: 0,
  },
  {
    question: "2 + 2?",
    options: ["3", "4", "5", "22"],
    answerIndex: 1,
  },
  {
    question: "cuale es el planeta mas cercano al sol?",
    options: ["Venus", "Tierra", "Mercurio", "Marte"],
    answerIndex: 2,
  },
];


                                                                                  
                                                                                
function mostrarPregunta(index) {                                                                                             
  const pregunta = preguntas[index];                                                                                          
  const display = document.getElementById("espacio-preguntas");                                                                
                                                                                                                              
  // Empezamos el HTML con el h2 y la apertura del div                                                                        
  let html = `                                                                                                                
    <h2 id="question-text">${pregunta.question}</h2>                                                                          
    <div id="options-container">                                                                                              
  `;                                                                                                                          
                                                                                                                              
  // Recorremos las opciones                                                                       
  for (let i = 0; i < pregunta.options.length; i++) {                                                                         
    html +=                                                                                                                   
      '<label>' +                                                                                                             
      '<input type="radio" name="option" data-option="' + i + '" value="' + i + '" />' +                                      
      pregunta.options[i] +                                                                                                   
      '</label>';                                                                                                             
  }                                                                                                                           
                                                                                                                              
  // Cerramos el div y recién AHORA asignamos innerHTML (una sola vez)                                                        
  html += `</div>`;                                                                                                           
                                                                                                                              
  display.innerHTML = html;                                                                                                   
}                                                                                                                             
                                                                                                                                 
   // Mostrar la primera pregunta al cargar                                                                                      
   mostrarPregunta(2);    