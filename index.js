const DOMselectors = {
  form: document.getElementById("name"),
  text: document.querySelector("#text"),
  box: document.getElementById("cardChild"),
  grab: document.querySelectorAll(".form-example"),
};

console.log(DOMselectors.form);
console.log(DOMselectors.box);
console.log(DOMselectors.grab);

function backgroundAndText(background) {
  background.style.backgroundColor = "Red";
}
backgroundAndText(DOMselectors.box);
