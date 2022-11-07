import { getDepartaments } from "./requestsAdmin.js";
import { renderCardsDepartaments } from "./renderCardsAdmin.js";

async function renderNewDepartaments() {
  const arrayAllCompanies = await getDepartaments();
  renderCardsDepartaments(arrayAllCompanies);
}

export { renderNewDepartaments };
