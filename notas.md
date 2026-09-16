# Notas — Quiz App

## 1\. Estructura HTML

`#menu-modos` es el menú principal y siempre visible. Debajo, dos pantallas `section` se muestran/ocultan según el modo:

*   `#menu-modos`: menú principal permanente con dos botones — `#mode-edit-btn` (crear pregunta) y `#mode-quiz-btn` (quiz).
*   `#mode-edit`: formulario `#question-form` con input de pregunta, 4 inputs `.option-input` (A–D) y radios `name="correct"` (value 0–3) para marcar la respuesta correcta.
*   `#mode-quiz`: `#question-display` con `#question-text` (enunciado) y `#options-container` con 4 opciones.

### Anatomía de una pregunta

```html
<div id="question-display">
  <h2 id="question-text">Question will appear here</h2>
  <div id="options-container">
    <label><input type="radio" name="option" data-option="0" /> Option A</label>
    <label><input type="radio" name="option" data-option="1" /> Option B</label>
    <label><input type="radio" name="option" data-option="2" /> Option C</label>
    <label><input type="radio" name="option" data-option="3" /> Option D</label>
  </div>
</div>
```

El name="option" compartido es lo que convierte esas 4 radios en un **single select nativo**

## 2\. JavaScript - menu

usar el menú para navegar entre pantallas. Según el botón que toque, una sección se oculta y la otra se muestra.

\*Cómo funciona:

1.  con getElementById("mode-edit-btn").addEventListener("click", llamo cunado da click
2.  con esto oculto: .classList.add("ocultar");
3.  con eso muestro: .classList.remove("ocultar");

## 3\. preguntas con JavaScrip

Las preguntas deben de estar en una estrucutra de datos

```
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
```

con .innerHTML puedo agregar HTML en cualquier lugar.

El plan es, en el HTML tengo un div 

\<div id="espacio-preguntas">\</div>

en JS puedo agregar le cosas con 

document.getElementById("espacio-preguntas").innerHTML = \`HTML\`;

otro punto importate es 

html += \`\</div>\`;

 con += html voy agregndo cosas al html para despues solo insertar este objeto 

## 4, como revisar la respuesta de las preguntas 

agregar un boton que revise por pregunta:

\<button class="revisar-btn">Revisar\</button>

ahora tengo un prblema con este boton , como lo hago unico, para que cada pregunta tenga su propio boton 

puedo usar data-

esto me premite usar `elemento.dataset.indice` y me da el indice 

quiero poder tener una comparacion que sea, idice seleccionado es igual a indice de respeusta 

deberia poder guardar:

*   cuantas se an respodido 
*   cuantas son correctas

el porblema es seleecionar lo que quiero 

## 5\. editar preguntas

estrategia, el HTML que estoy agregado con JS, copiarlo y modificarlo para que ahora se un input 

crear una funcion como la de edit que cambie preguntas