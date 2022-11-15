const DOMselectors = {
  formA: document.getElementById("form-example"),
  value: document.querySelectorAll("#inputA"),
  text: document.querySelector("#cardChild"),
  box: document.querySelector("#cardChild"),
  grab: document.querySelectorAll(".form-example"),
  button: document.getElementById("btn"),
};

console.log(DOMselectors.formA);
console.log(DOMselectors.box);
console.log(DOMselectors.grab);
console.log(DOMselectors.text);
console.log(DOMselectors.button);
console.log(DOMselectors.value);
//function backgroundAndText(background, text) {
// background.style.backgroundColor = "Red";//
//text.innerHTML = "Amogus";//
//}//

//DOMselectors.button.addEventListener("click", function (event) {
// event.preventDefault();//
// backgroundAndText(DOMselectors.box, DOMselectors.text);//
//});//

DOMselectors.formA.addEventListener("submit", function (event) {
  event.preventDefault();

  let input = DOMselectors.value;
  let response = {};
  response.name = (0).value;
  response.home = (1).value;
});
