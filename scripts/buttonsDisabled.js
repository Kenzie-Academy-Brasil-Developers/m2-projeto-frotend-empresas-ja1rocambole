function buttonLoginDisabled() {
  const form = document.querySelector("#form-login");
  const elements = [...form.elements];

  function buttonDisabled() {
    const buttonPrimary = document.querySelector("#button-login");

    if (elements[0].value == "" || elements[1].value == "") {
      buttonPrimary.disabled = true;
      buttonPrimary.classList.add("button-blue-default-enable");
    } else {
      buttonPrimary.disabled = false;
      buttonPrimary.classList.remove("button-blue-default-enable");
    }
  }
  buttonDisabled();

  form.addEventListener("input", () => {
    buttonDisabled();
  });
}

function buttonModalCreateDepartamentDisabled() {
  const form = document.querySelector("#form-create-departament");
  const elements = [...form.elements];
  const buttonForm = elements[3];

  if (
    elements[0].value == "" ||
    elements[1].value == "" ||
    elements[2].value == ""
  ) {
    buttonForm.disabled = true;
    buttonForm.classList.remove("button-primary-enable");
  } else {
    buttonForm.disabled = false;
    buttonForm.classList.add("button-primary-enable");
  }

  form.addEventListener("input", () => {
    if (
      elements[0].value == "" ||
      elements[1].value == "" ||
      elements[2].value == ""
    ) {
      buttonForm.disabled = true;
      buttonForm.classList.remove("button-primary-enable");
    } else {
      buttonForm.disabled = false;
      buttonForm.classList.add("button-primary-enable");
    }
  });
}

function buttondisabledModalEditUser(form, buttonForm) {
  const elements = [...form.elements];

  if (
    elements[0].value == "" ||
    elements[1].value == "" ||
    elements[2].value == ""
  ) {
    buttonForm.disabled = true;
    buttonForm.classList.remove("button-primary-enable");
  } else {
    buttonForm.disabled = false;
    buttonForm.classList.add("button-primary-enable");
  }

  form.addEventListener("input", () => {
    if (elements[0].value == "" || elements[1].value == "") {
      buttonForm.disabled = true;
      buttonForm.classList.remove("button-primary-enable");
    } else {
      buttonForm.disabled = false;
      buttonForm.classList.add("button-primary-enable");
    }
  });
}

export { buttonLoginDisabled, buttonModalCreateDepartamentDisabled, buttondisabledModalEditUser };
