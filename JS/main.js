const buttonSubmit = document.querySelector("#submit-btn");

buttonSubmit.addEventListener("click", (event) => {
  const form = document.querySelector("#evaluation-form");

  const name = document.querySelector("#input-name").value;
  const lastName = document.querySelector("#input-lastname").value;
  const email = document.querySelector("#input-email").value;
  const selectHouse = document.querySelector("#house").value;
  const selectFamily = verifyFamily();
  const selectContents = verifyContents();

  const saveLocalStorage = (form.innerHTML = ` {
   Nome:${name},
   Sobrenome:${lastName},
   Email:${email},
   Casa:${selectHouse},
   Família:${selectFamily},
   Conteúdos>${selectContents}
  }
`);
  saveLocalStorageRegister(saveLocalStorage);
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

function saveLocalStorageRegister(register) {
  if (localStorage.getItem("register") === null) {
    localStorage.setItem("register", JSON.stringify(register));
  } else {
  }
}
