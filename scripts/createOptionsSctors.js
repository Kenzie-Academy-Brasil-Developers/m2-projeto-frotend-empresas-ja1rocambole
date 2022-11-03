import { getAllSectors, getBySectorCompanies } from "./requests.js";
import { renderCardsCompanies } from "./renderCompanies.js";

async function createOptionsSectors() {
  const arraySectors = await getAllSectors();

  const select = document.querySelector("#select-setor");

  select.insertAdjacentHTML(
    "beforeend",
    `
        <option value="">Todos</option>
  
        `
  );

  arraySectors.forEach((element) => {
    select.insertAdjacentHTML(
      "beforeend",
      `
        <option value="${element.description}">${element.description}</option>
  
        `
    );
  });

  select.addEventListener("change", async () => {
    const sectorChange = select.value;
    const arrayAlimenticionCompanies = await getBySectorCompanies(sectorChange);

    renderCardsCompanies(arrayAlimenticionCompanies);
  });
}
export { createOptionsSectors };
