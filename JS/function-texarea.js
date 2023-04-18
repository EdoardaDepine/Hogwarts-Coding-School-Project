const textArea = document.querySelector("#textarea");
const counter = document.querySelector("#counter");

textArea.addEventListener("keyup", () => {
  counter.innerText = 500 - textArea.value.length;
});
