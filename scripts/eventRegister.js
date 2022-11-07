import { buttonRegisterDisabled } from "./buttonsDisabled.js";
import { postRegister } from "./requests.js";

function eventRegister() {
  const formRegister = document.querySelector("#form-login");
  console.log(formRegister);

  const elements = [...formRegister];

  const buttonRegister = document.querySelector("#button-register");

  buttonRegisterDisabled(formRegister, elements, buttonRegister);

  formRegister.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {};

    console.log(elements);
    elements.forEach((elem) => {
      if (elem.tagName == "INPUT" || elem.tagName == "SELECT") {
        body[elem.name] = elem.value;
      }
    });
    console.log(body);
    const token = await postRegister(body);
      console.log(token);
      window.location.replace("../login")
  });
}

export { eventRegister };
