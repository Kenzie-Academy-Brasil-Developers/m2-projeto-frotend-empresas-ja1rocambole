import { deleteDepartament } from "./requestsAdmin.js";
import { getDepartaments } from "./requestsAdmin.js";
import { renderCardsDepartaments } from "./renderCardsAdmin.js";
import { closeModal, closeModalNow } from "./closeModal.js";

async function createDeleteModal(idDepartament, departament) {
  const body = document.querySelector("body");

  body.insertAdjacentHTML(
    "afterbegin",
    `
         <div class="background-modal">
            <div class="modal-confirm">
                <button class="close-modal">x</button>
                <p class="title-modal-confirm">Realmente deseja deletar o Departamento ${departament} e demitir seus funcionários?</p>
                <button class="button-green-default" id="button-delete-confirm">Confirmar</button>
            </div>
         </div>
    
        `
  );
  closeModal();

  const buttonConfirmDelete = document.querySelector("#button-delete-confirm");

  buttonConfirmDelete.addEventListener("click", async (elem) => {
    await deleteDepartament(idDepartament);

    const selectCompany = document.querySelector("#select-enterprise");
    const companyChange = selectCompany.value;

    const arrayDepartaments = await getDepartaments(companyChange);

    renderCardsDepartaments(arrayDepartaments);

    closeModalNow();
  });
}

export { createDeleteModal };
