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
