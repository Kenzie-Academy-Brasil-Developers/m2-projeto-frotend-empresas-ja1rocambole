import { getAllCompanies, getDepartaments } from "./requestsAdmin.js";
import { renderCardsDepartaments } from "./renderCardsAdmin.js";
import { renderNewDepartaments } from "./renderNewDepartaments.js";


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
  await renderNewDepartaments();
  //so depois dele renderizar os departamentos eu posso capturar os botoes
  

  select.addEventListener("change", async () => {
    const companyChange = select.value;

    const arrayDepartaments = await getDepartaments(companyChange);

    renderCardsDepartaments(arrayDepartaments);
  });
}

export { renderOptionsCompanies };
