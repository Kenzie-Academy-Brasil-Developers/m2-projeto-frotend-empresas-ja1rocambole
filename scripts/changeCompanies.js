import { getAllCompanies, getDepartaments } from "./requestsAdmin.js";
import { renderCardsDepartaments } from "./renderCardsAdmin.js";

async function renderOptionsCompanies() {
  const select = document.querySelector("#select-enterprise");

  const arrayCompanies = await getAllCompanies();

  arrayCompanies.forEach((element) => {
    select.insertAdjacentHTML(
      "beforeend",
      `
        <option value="${element.uuid}">${element.name}</option>
      
     `
    );
  });
  const arrayAllCompanies = await getDepartaments();
  renderCardsDepartaments(arrayAllCompanies);

  select.addEventListener("change", async () => {
    const companyChange = select.value;

    const arrayDepartaments = await getDepartaments(companyChange);

    renderCardsDepartaments(arrayDepartaments);
  });
}
renderOptionsCompanies();

export { renderOptionsCompanies };
