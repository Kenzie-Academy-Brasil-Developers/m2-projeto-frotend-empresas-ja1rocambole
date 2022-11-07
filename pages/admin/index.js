import { checkUserTypeAdmin } from "../../scripts/checkAuthorization.js";
import { renderOptionsCompanies } from "../../scripts/crateOpitions.js";
import { eventCreateDepartament } from "../../scripts/createPostDepartament.js";
import { renderCardUsers } from "../../scripts/renderUsers.js";

checkUserTypeAdmin();

renderOptionsCompanies();

eventCreateDepartament();

renderCardUsers();

const buttonLogOut = document.querySelector("#button-logout");

buttonLogOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("../login");
});
