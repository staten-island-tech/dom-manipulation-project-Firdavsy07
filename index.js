const DOMselectors = {
  formA: document.getElementById("form-example"),
  input: document.querySelectorAll("#inputA"),
  submit: document.getElementById("inputB"),
  box: document.querySelectorAll("#cardChild"),
  container: document.getElementById("cardChild"),
  grab: document.querySelectorAll(".form-example"),
  button: document.getElementById("btn"),
  value1: document.querySelector(".input1"),
  value2: document.querySelector(".input2"),
  value3: document.querySelector(".input3"),
};

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
  const name = DOMselectors.value1.value;
  console.log(name);
  const info = {};
  info.name = name;
  console.log(info);

  const address = DOMselectors.value2.value;
  console.log(address);
  info.address = address;
  console.log(info);

  const hobby = DOMselectors.value3.value;
  console.log(hobby);
  info.hobby = hobby;
  console.log(info);

  DOMselectors.container.insertAdjacentHTML("afterend", ${name});
  DOMselectors.container.insertAdjacentHTML("afterend", "");
  DOMselectors.container.insertAdjacentHTML("afterend", "");
});
