import { checkUserTypeUser } from "../../scripts/checkAuthorization.js";

checkUserTypeUser();

const buttonLogOut = document.querySelector("#button-logout");

buttonLogOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("../login");
});
