const DOMselectors = {
  formA: document.getElementById("inputA"),
  formB: document.getElementById("inputB"),
  formC: document.getElementById("inputC"),
  text: document.querySelectorAll("#cardChild"),
  box: document.getElementById("cardChild"),
  grab: document.querySelectorAll(".form-example"),
  button: document.getElementById("btn"),
};

console.log(DOMselectors.formA);
console.log(DOMselectors.formB);
console.log(DOMselectors.formC);
console.log(DOMselectors.box);
console.log(DOMselectors.grab);
console.log(DOMselectors.text);
console.log(DOMselectors.button);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "Red";
  text.innerHTML = "Amogus";
}

DOMselectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  backgroundAndText(DOMselectors.box, DOMselectors.text);
});
