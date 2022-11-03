import { renderCardsCompanies } from "../../scripts/renderCompanies.js";
import { getAllCompanies } from "../../scripts/requests.js";
import { createOptionsSectors } from "../../scripts/createOptionsSctors.js";
import { menuHamburger } from "../../scripts/menuHamburger.js";
import { buttonReplace } from "../../scripts/buttonReplace.js";

createOptionsSectors();

const arrayAllCompanies = await getAllCompanies();

renderCardsCompanies(arrayAllCompanies);

menuHamburger();

const arrayButtonsLogin = document.querySelectorAll(".button-white-default");

arrayButtonsLogin.forEach((element) => {
  buttonReplace(element, "../login");
});

const arrayButtonsCadastro = document.querySelectorAll(".button-blue-default");

arrayButtonsCadastro.forEach((element) => {
  buttonReplace(element, "../register");
});
