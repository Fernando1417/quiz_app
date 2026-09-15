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

## 2. JavaScript - menu
usar el menú para navegar entre pantallas. Según el botón que toque, una sección se oculta y la otra se muestra.

*Cómo funciona:

1. Con `document.getElementById()` obtengo las secciones `#mode-edit` y `#mode-quiz`.
2. Con `addEventListener("click", ...)` escucho los clics de cada botón del menú.
3. Dentro de cada listener: `classList.add("hidden")` oculta la sección que no corresponde y `classList.remove("hidden")` muestra la elegida.


