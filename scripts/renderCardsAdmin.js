import { viewDepartament } from "./viewDepartament.js";
import { editDepartament } from "./editDepartament.js";
import { deleteDepartament } from "./deleteDepartament.js";

function renderCardsDepartaments(arrayDepartament) {
  const ulDepartaments = document.querySelector("#list-departament");
  ulDepartaments.innerHTML = "";

  if (arrayDepartament.length == 0) {
    ulDepartaments.insertAdjacentHTML(
      "beforeend",
      `
          <p class="card-title">Essa empresa não possui nenhum departamento cadastrado!</p>
          `
    );
  } else {
    arrayDepartament.forEach((element) => {
      ulDepartaments.insertAdjacentHTML(
        "beforeend",
        `
          <li class="card-departament">
              <h4 class="card-title">${element.name}</h4>
              <p class="card-description">${element.description}</p>
              <p class="card-description">${element.companies.name}</p>
              <div class="card-icons">
                  <p class="hidden">${element.uuid}</p>
                  <span class="button-card-departament-show"><img src="../../assets/olho.png" alt=""
                          srcset=""></span>
                  <span class="button-card-departament-edit"><img src="../../assets/lapisPreto.png" alt=""
                          srcset=""></span>
                  <span class="button-card-departament-delete"><img src="../../assets/lixeira.png" alt=""
                          srcset=""></span>
              </div>
          </li>
              `
      );
    });
  }
  viewDepartament();
  editDepartament();
  deleteDepartament();
}
export { renderCardsDepartaments };
