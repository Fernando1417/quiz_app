


document.getElementById("mode-quiz-btn").addEventListener("click", () => {
  document.getElementById("mode-edit").classList.add("ocultar");
  document.getElementById("mode-quiz").classList.remove("ocultar");
});


document.getElementById("mode-edit-btn").addEventListener("click", () => {
  document.getElementById("mode-quiz").classList.add("ocultar");
  document.getElementById("mode-edit").classList.remove("ocultar");
});
