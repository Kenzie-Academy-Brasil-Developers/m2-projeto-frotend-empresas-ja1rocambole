import { createViewModal } from "./viewDepartmentModal.js";

function viewDepartament() {
  const nodeListButtonsEye = document.querySelectorAll(
    ".button-card-departament-show"
  );
  const arrayButtonsEye = [...nodeListButtonsEye];

  arrayButtonsEye.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const idDepartament = event.path[2].children[0].innerText;
      const nameDepartament = event.path[3].children[0].innerText;
      const descriptionDepartament = event.path[3].children[1].innerText;
      const companyDepartament = event.path[3].children[2].innerText;

      createViewModal(
        idDepartament,
        nameDepartament,
        descriptionDepartament,
        companyDepartament
      );
    });
  });
}

export { viewDepartament };
