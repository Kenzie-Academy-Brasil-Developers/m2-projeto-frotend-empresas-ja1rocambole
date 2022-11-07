import { patchEditDepartament } from "./requestsAdmin.js";
import { getDepartaments } from "./requestsAdmin.js";
import { renderCardsDepartaments } from "./renderCardsAdmin.js";
import { closeModal, closeModalNow } from "./closeModal.js";

async function createEditModal(idDepartament, descriptionDepartament) {
  const body = document.querySelector("body");

  body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="background-modal">
        <div class="modal-create-edit">
             <button class="close-modal">x</button>
             <p class="title-modal">Editar Departamento</p>
            <form id="form-edit-departament" action="">
                <textarea name="description" class="text-area-edit" id="new-text-departament">${descriptionDepartament}</textarea>
                <button class="button-blue-default" id="button-edit-departament">Salvar alterações</button>
             </form>
        </div>

    </div>
    
        `
  );

  closeModal();

  const formEdit = document.querySelector("#form-edit-departament");

  formEdit.addEventListener("submit", async (event) => {
    event.preventDefault();
    const newDescription = formEdit.children[0].value;

    const body = {
      description: newDescription,
    };

    await patchEditDepartament(idDepartament, body);

    const selectCompany = document.querySelector("#select-enterprise");
    const companyChange = selectCompany.value;

    const arrayDepartaments = await getDepartaments(companyChange);

    renderCardsDepartaments(arrayDepartaments);
    closeModalNow();
  });
}

export { createEditModal };
