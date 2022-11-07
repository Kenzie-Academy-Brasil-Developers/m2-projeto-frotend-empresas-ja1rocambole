import { closeModal, closeModalNow } from "./closeModal.js";
import { buttondisabledModalEditUser } from "./buttonsDisabled.js";
import { patchEditUser } from "./requestsAdmin.js";
import { renderCardUsers } from "./renderUsers.js";

function createEditUserModal(idUser) {
  const body = document.querySelector("body");

  body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="background-modal">
        <div class="modal-create-edit">
             <button class="close-modal">x</button>
             <p class="title-modal">Editar Usuário</p>
            <form id="form-edit-user" action="">
                 <select class="select-edit-user" name="kind_of_work" id="">
                     <option value="">Selecionar modalidade de trabalho </option>
                     <option value="presencial">Presencial</option>
                     <option value="home office">Home ofice</option>
                     <option value="hibrido">Hibrido</option>
                 </select>

                 <select class="select-edit-user" name="professional_level" id="">
                     <option value="">Selecionar nível profissional</option>
                     <option value="estágio">estágio</option>
                     <option value="júnior">júnior</option>
                     <option value="pleno">pleno</option>
                     <option value="sênior">sênior</option>
                 </select>

                <button class="button-blue-default" id="button-edit-user">Salvar alterações</button>
             </form>
        </div>

    </div>
    
        `
  );

  closeModal();

  const formEDitUser = document.querySelector("#form-edit-user");
  const buttonForm = formEDitUser.children[2];

  buttondisabledModalEditUser(formEDitUser, buttonForm);

  formEDitUser.addEventListener("submit", async (event) => {
    event.preventDefault();
    const kindOfWork = formEDitUser.children[0].value;
    const professionalLevel = formEDitUser.children[1].value;

    const body = {
      kind_of_work: kindOfWork,
      professional_level: professionalLevel,
    };

    patchEditUser(idUser, body);

    await renderCardUsers();

    closeModalNow();
  });
}

export { createEditUserModal };
