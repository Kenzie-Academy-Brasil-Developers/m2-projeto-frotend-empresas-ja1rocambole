import { getAllCompanies, postCreateDepartament } from "./requestsAdmin.js";
import { closeModal, closeModalNow } from "./closeModal.js";
import { renderNewDepartaments } from "./renderNewDepartaments.js";
import { buttonModalCreateDepartamentDisabled } from "./buttonsDisabled.js";

async function modalCreateDepartament() {
  const body = document.querySelector("body");

  body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="background-modal">
        <div class="modal-create-edit">
        <button class="close-modal">x</button>
            <form id="form-create-departament" action="">
                <p class="title-modal">Criar Departamento</p>
                <input class="input-modal" name="name" type="text" placeholder="Nome do departamento">
                <input class="input-modal" name="description" type="text" placeholder="Descrição">
                <select class="input-modal" name="company_uuid" id="select-modal">
                    <option value="">Selecionar empresa</option>
                </select>
                <button class="button-blue-default">Criar o departamento</button>
             </form>
        </div>

    </div>
     `
  );
  closeModal();
  //capturar as empresas e seus uuid e os rederizar dentro do select
  const arrayCompanies = await getAllCompanies();
  const selectModal = document.querySelector("#select-modal");

  arrayCompanies.forEach((elem) => {
    selectModal.insertAdjacentHTML(
      "beforeend",
      `
        <option value="${elem.uuid}">${elem.name}</option>
      `
    );
  });
}

function submitCreateDepartament() {
  const form = document.querySelector("#form-create-departament");
  const elements = [...form.elements];

  buttonModalCreateDepartamentDisabled();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {};

    elements.forEach((elem) => {
      if (elem.tagName !== "BUTTON" && elem.value !== "") {
        body[elem.name] = elem.value;
      }
    });
    await postCreateDepartament(body);
    renderNewDepartaments();

    closeModalNow();
  });
}

function eventCreateDepartament() {
  const buttonCreateDepartament = document.querySelector(
    "#button-create-departament"
  );

  buttonCreateDepartament.addEventListener("click", () => {
    //funçao criar modal e dps fazer os paranaue pra escultar os botoes
    modalCreateDepartament();

    submitCreateDepartament();
  });
}

export { eventCreateDepartament };
