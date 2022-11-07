import { closeModal, closeModalNow } from "./closeModal.js";
import { deleteUser } from "./requestsAdmin.js";
import { renderCardUsers } from "./renderUsers.js";

function createDeleteUserModal(idUser, nameUser) {
  const body = document.querySelector("body");

  //Realmente deseja remover o usuário NOME?
  body.insertAdjacentHTML(
    "afterbegin",
    `
           <div class="background-modal">
              <div class="modal-confirm">
                  <button class="close-modal">x</button>
                  <p class="title-modal-confirm">Realmente deseja remover o usuário ${nameUser}?</p>
                  <button class="button-green-default" id="button-user-delete-confirm">Confirmar</button>
              </div>
           </div>
      
          `
  );
  closeModal();

  const buttonConfirmDeleteUser = document.querySelector(
    "#button-user-delete-confirm"
  );

  buttonConfirmDeleteUser.addEventListener("click", async () => {
    await deleteUser(idUser);

    await renderCardUsers();

    closeModalNow();
  });
}

export { createDeleteUserModal };
