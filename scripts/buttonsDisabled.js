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
export { buttonLoginDisabled };
