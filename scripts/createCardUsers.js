import { getDepartaments } from "./requestsAdmin.js";
import { editUser } from "./editUser.js";
import { deleteUser } from "./deleteUsers.js";

async function createCardsUsers(arrayUsers) {
  const ulUsers = document.querySelector("#list-users");
  ulUsers.innerHTML = "";

  if (arrayUsers.length == 0) {
    ulUsers.insertAdjacentHTML(
      "beforeend",
      `
              <p class="card-title">Não há usuários cadastrados!</p>
              `
    );
  } else {
    const response = await getDepartaments();

    arrayUsers.forEach((element) => {
      let ocupaçao = "Sem empresa";

      response.forEach((res) => {
        if (res.uuid == element.department_uuid) {
          ocupaçao = res.companies.name;
        }
      });

      ulUsers.insertAdjacentHTML(
        "beforeend",
        `
    <li class="card-departament">
        <h4 class="card-title">${element.username}</h4>
        <p class="card-description">${element.professional_level}</p>
        <p class="card-description">${ocupaçao}</p>
        <div class="card-icons">
            <p class="hidden">${element.uuid}</p>
            <span class="button-card-hidden"><img src="../../assets/olho.png" alt=""
                    srcset=""></span>
            <span class="button-card-user-edit"><img src="../../assets/lapisPreto.png" alt=""
                    srcset=""></span>
            <span class="button-card-user-delete"><img src="../../assets/lixeira.png" alt=""
                    srcset=""></span>
        </div>
    </li>
                  `
      );
    });
  }
  editUser();
  deleteUser();
}

export { createCardsUsers };
