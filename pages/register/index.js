import { menuHamburger } from "../../scripts/menuHamburger.js";
import { buttonReplace } from "../../scripts/buttonReplace.js";
import { eventRegister } from "../../scripts/eventRegister.js";

menuHamburger();

const arrayButtonsHome = document.querySelectorAll(".button-white-default");
arrayButtonsHome.forEach((element) => {
  buttonReplace(element, "../home");
});

const arrayButtonsCadastro = document.querySelector(".button-blue-default");
buttonReplace(arrayButtonsCadastro, "../login");

eventRegister();
