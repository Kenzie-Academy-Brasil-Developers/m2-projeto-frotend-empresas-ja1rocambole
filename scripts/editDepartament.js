import { createEditModal } from "./editDepartamentModal.js";

function editDepartament() {
  const nodeListButtonsPen = document.querySelectorAll(
    ".button-card-departament-edit"
  );
  const arrayButtonsPen = [...nodeListButtonsPen];

  arrayButtonsPen.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const idDepartament = event.path[2].children[0].innerText;
      const descriptionDepartament = event.path[3].children[1].innerText;

      //aqui eu crio a funçao do modal de ediçao
      createEditModal(idDepartament, descriptionDepartament);
    });
  });
}

export { editDepartament };
