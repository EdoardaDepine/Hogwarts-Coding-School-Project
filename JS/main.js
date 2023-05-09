const buttonSubmit = document.querySelector("#submit-btn");

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#evaluation-form");

    const name = document.querySelector("#input-name").value;
    const lastName = document.querySelector("#input-lastname").value;
    const email = document.querySelector("#input-email").value;
    const selectHouse = document.querySelector("#house").value;
    const selectFamily = verifyFamily();
    const selectContents = verifyContents();
    const selectRate = verifyRate();
    const textAreaComent = verifyTextArea();

    const obj = {
        Nome: name,
        Sobrenome: lastName,
        Email: email,
        Casa: selectHouse,
        Família: selectFamily,
        Conteúdos: selectContents,
        Nota: selectRate,
        Comentários: textAreaComent,
    };

    setStudentLocalStorage(obj);

    return (form.innerHTML = `[
    Nome: ${name},
    Sobrenome: ${lastName},
    Email: ${email},
    Casa: ${selectHouse},
    Família: ${selectFamily},
    Conteúdos: ${selectContents},
    Nota: ${selectRate},
    Comentários: ${textAreaComent},
  ]
  `);
});

function verifyFamily() {
    const inputsFamily = document.getElementsByName("family");

    for (let i = 0; i < inputsFamily.length; i++) {
        const input = inputsFamily[i];
        if (input.checked) return input.value;
    }
}

function verifyContents() {
    const checkBoxesNodeList = document.getElementsByName("check-content");
    const checkBoxesContent = Array.from(checkBoxesNodeList);
    const checkedList = checkBoxesContent.filter((checkBox) => checkBox.checked);
    return checkedList.map((check) => check.value);
}

function verifyRate() {
    const inputsRate = document.getElementsByName("rate");

    for (let i = 0; i < inputsRate.length; i++) {
        const element = inputsRate[i];
        if (element.checked) {
            return element.value;
        }
    }
}

function verifyTextArea() {
    const textArea = document.querySelector("#textarea");
    return textArea.value;
}

function getStudentLocalStorage() {
    return JSON.parse(localStorage.getItem("student")) || [];
}

function setStudentLocalStorage(student) {
    if (localStorage.hasOwnProperty("student")) {
        localStorage.setItem(
            "student",
            JSON.stringify([...getStudentLocalStorage(), student])
        );
    } else {
        localStorage.setItem("student", JSON.stringify([student]));
    }
}