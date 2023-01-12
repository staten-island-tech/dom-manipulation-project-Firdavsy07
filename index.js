const DOMselectors = {
  formA: document.getElementById("form-example"),
  container: document.getElementById("cardChild"),
  button: document.getElementById("submit"),
  value1: document.querySelector(".input1"),
  value2: document.querySelector(".input2"),
  value3: document.querySelector(".input3"),
};
console.log(DOMselectors);

DOMselectors.button.addEventListener("click", function (card) {
  card.preventDefault();
  create();
  erase();
});

function create() {
  const name = DOMselectors.value1.value;
  const address = DOMselectors.value2.value;
  const hobby = DOMselectors.value3.value;
  DOMselectors.container.insertAdjacentHTML(
    "afterend",
    `<div id="cardGrandChild">
    <p>${name}</p>
    <p>${address}</p> 
    <p>${hobby}</p>
    <button class="btn">Erase Me</button>
  </div>
    `
  );
}

function erase() {
  let remove = document.querySelectorAll(".btn");
  remove.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
}
