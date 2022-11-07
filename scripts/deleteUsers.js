import { createDeleteUserModal } from "./deleteUsersModal.js";

function deleteUser() {
  const nodeListButtonsTrash = document.querySelectorAll(
    ".button-card-user-delete"
  );
  const arrayButtonsTrash = [...nodeListButtonsTrash];


  arrayButtonsTrash.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const idUser = event.path[2].children[0].innerText;
      const nameUser = event.path[3].children[0].innerText;

      createDeleteUserModal(idUser, nameUser);
    });
  });
}

export { deleteUser };
