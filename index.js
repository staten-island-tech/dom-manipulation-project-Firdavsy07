const DOMselectors = {
  formA: document.getElementById("form-example"),
  value: document.querySelectorAll("#inputA"),
  submit: document.getElementById("inputB"),
  box: document.querySelectorAll("#cardChild"),
  grab: document.querySelectorAll(".form-example"),
  button: document.getElementById("btn"),
  value1: document.querySelector(".input1"),
  value2: document.querySelector(".input2"),
  value3: document.querySelector(".input3"),
};

console.log(DOMselectors.submit);
console.log(DOMselectors.formA);
console.log(DOMselectors.box);
console.log(DOMselectors.grab);
console.log(DOMselectors.button);
console.log(DOMselectors.value1);
console.log(DOMselectors.value2);
console.log(DOMselectors.value3);
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
  let input = DOMselectors.boxd.value;
  console.log(input);
  let info = {};
  info.input = input;
  console.log(info);
});
