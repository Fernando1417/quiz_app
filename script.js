


document.getElementById("mode-quiz-btn").addEventListener("click", () => {
  document.getElementById("mode-edit").classList.add("ocultar");
  document.getElementById("mode-quiz").classList.remove("ocultar");
});


document.getElementById("mode-edit-btn").addEventListener("click", () => {
  document.getElementById("mode-quiz").classList.add("ocultar");
  document.getElementById("mode-edit").classList.remove("ocultar");
});


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