import { createDeleteModal } from "./deleteDepartamentModal.js";

function deleteDepartament() {
  const nodeListButtonsTrash = document.querySelectorAll(
    ".button-card-departament-delete"
  );
  const arrayButtonsTrash = [...nodeListButtonsTrash];

  arrayButtonsTrash.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const idDepartament = event.path[2].children[0].innerText;
      const titleDepartament = event.path[3].children[0].innerText;

      createDeleteModal(idDepartament, titleDepartament);
    });
  });
}

export { deleteDepartament };
