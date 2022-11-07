import { menuHamburger } from "../../scripts/menuHamburger.js";
import { buttonReplace } from "../../scripts/buttonReplace.js";
import { eventLogin } from "../../scripts/eventLogin.js";
import { buttonLoginDisabled } from "../../scripts/buttonsDisabled.js"

buttonLoginDisabled()

menuHamburger();

const arrayButtonsHome = document.querySelectorAll(".button-white-default");
arrayButtonsHome.forEach((element) => {
  buttonReplace(element, "../home");
});

const arrayButtonsCadastro = document.querySelector(".button-blue-default");
buttonReplace(arrayButtonsCadastro, "../register");

eventLogin()