import { getAllUser, patchAdmission, patchDismiss } from "./requestsAdmin.js";
import { closeModal, closeModalNow } from "./closeModal.js";

async function eventsModalView(idDepartament) {
  const ulDismissal = document.querySelector("#list-dismissal");
  const arrayAllUsers = await getAllUser();

  ulDismissal.innerHTML = "";

  const arrayDismissalUsers = arrayAllUsers.filter((value) => {
    if (value.is_admin !== true && value.department_uuid == idDepartament) {
      return value;
    }
  });

  if (arrayDismissalUsers.length > 0) {
    arrayDismissalUsers.forEach((elem) => {
      ulDismissal.insertAdjacentHTML(
        "beforeend",
        `
                      <li class="card-dismissal">
                          <p class="hidden">${elem.uuid}</p>
                          <p class="">${elem.username}</p>
                          <span class="">${elem.professional_level}</span>
                          <span class="">${elem.companyDepartament}</span>
              
                          <button class="button-red-default">Desligar</button>
                      </li>
           `
      );
    });
  } else {
    ulDismissal.insertAdjacentHTML(
      "beforeend",
      `
               <p class="title-modal">Não há nenhum funcionario contratado</p>
          `
    );
  }
  const arrayButtonsDismissal = document.querySelectorAll(
    ".button-red-default"
  );

  arrayButtonsDismissal.forEach((elem) => {
    elem.addEventListener("click", async (event) => {
      const userId = event.path[1].children[0].innerText;

      await patchDismiss(userId);
      closeModalNow();
    });
  });

  const selectAdditions = document.querySelector("#select-additions");

  arrayAllUsers.forEach((elem) => {
    if (elem.is_admin !== true && elem.department_uuid == null) {
      selectAdditions.insertAdjacentHTML(
        "beforeend",
        `
          <option value="${elem.uuid}">${elem.username}</option>
          `
      );
    }
  });

  const formAditions = document.querySelector(".container-additions");
  formAditions.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {
      department_uuid: idDepartament,
      user_uuid: selectAdditions.value,
    };

    await patchAdmission(body);
    closeModalNow();
  });
}

async function createViewModal(
  idDepartament,
  nameDepartament,
  descriptionDepartament,
  companyDepartament
) {
  const body = document.querySelector("body");
  body.insertAdjacentHTML(
    "afterbegin",
    `
          <div class="background-modal">
               <div class="modal-view">
                  <div class="container-top-modal">
                      <button class="close-modal">x</button>
                      <p class="title-modal">${nameDepartament}</p>
      
                      <div class="container-company-additions">
      
                          <div class="container-company">
                              <p>${descriptionDepartament}</p>
                              <span>${companyDepartament}</span>
                          </div>
      
                          <form class="container-additions">
                              <select name="" id="select-additions">
                                  <option value="">Selecionar usuário</option>
                              </select>
                              <button class="button-green-default">Contratar</button>
                          </form>
      
                      </div>
                  </div>
      
                  <ul id="list-dismissal">
                  </ul>
  
               </div>
  
          </div>
          `
  );
  closeModal();

  eventsModalView(idDepartament);
}

export { createViewModal };
