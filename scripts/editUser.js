import { createEditUserModal } from "./editUserModal.js";

function editUser() {
  const nodeListButtonsPen = document.querySelectorAll(
    ".button-card-user-edit"
  );

  const arrayButtonsPen = [...nodeListButtonsPen];

  arrayButtonsPen.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const idUser = event.path[2].children[0].innerText;
      createEditUserModal(idUser);
    });
  });
}

export { editUser };
