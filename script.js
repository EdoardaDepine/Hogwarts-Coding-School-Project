const buttonLogin = document.querySelector("#login");

buttonLogin.addEventListener("click", (event) => {
  event.preventDefault();

  const inputEmail = document.querySelector("#input-name-login");
  const inputSenha = document.querySelector("#input-password-login");

  const inputEmailValue = inputEmail.value;
  const inputSenhaValue = inputSenha.value;

  inputsVerification(inputEmailValue, inputSenhaValue);

  inputEmail.value = "";
  inputSenha.value = "";
});

function inputsVerification(email, senha) {
  if (email == "student@test.com" && senha == "123456") {
    alert("Bem vindo!");
  } else {
    alert("Email ou senha inválidos!");
  }
}

const textArea = document.querySelector("#textarea");
const counter = document.querySelector("#counter");

textArea.addEventListener("keyup", () => {
  counter.innerText = 500 - textArea.value.length;
});

const buttonSubmit = document.querySelector("#submit-btn");

buttonSubmit.addEventListener("click", (event) => {
  const form = document.querySelector("#evaluation-form");

  const name = document.querySelector("#input-name").value;
  const lastName = document.querySelector("#input-lastname").value;
  const email = document.querySelector("#input-email").value;
  const selectHouse = document.querySelector("#house").value;
  const selectFamily = verifyFamily();
  const selectContents = verifyContents();

  form.innerHTML = `
   <div>Nome:${name}</div>
   <div>Sobrenome:${lastName}</div>
   <div>Email:${email}</div>
   <div>Casa:${selectHouse}</div>
   <div>Família:${selectFamily}</div>
   <div>Conteúdos>${selectContents}</div>
`;
});

function verifyFamily() {
  const inputsFamily = document.querySelectorAll(".radio-skil");

  inputsFamily.forEach((input) => {
    input.addEventListener("click", (event) => {
      if (event.target.checked) {
        return event.target.value;
      }
    });
  });
  //console.log(inputsFamily);
}

function verifyContents() {
  const checkBoxes = document.querySelectorAll(".check-content");
  const arr = [];

  checkBoxes.forEach((check) => {
    check.addEventListener("click", (event) => {
      if (event.checked) {
        return arr.push[event.target.value];
      }
    });
  });
  console.log(arr);
}
