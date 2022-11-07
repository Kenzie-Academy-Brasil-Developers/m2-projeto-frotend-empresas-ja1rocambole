import { getTokenLocal } from "./getTokenLocal.js";

const baseUrl = "http://localhost:6278/";

async function getCheckTypeUser(token) {
  const request = await fetch(baseUrl + "auth/validate_user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();

  return response.is_admin;
}

async function getAllCompanies() {
  const request = await fetch(baseUrl + "companies");

  const response = await request.json();

  return response;
}

async function getDepartaments(idDepartament = "") {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + `departments/${idDepartament}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();

  return response;
}

async function postCreateDepartament(body) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + "departments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
}

async function getAllUser() {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + "users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();

  return response;
}

async function patchAdmission(body) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + "departments/hire", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
}

async function patchDismiss(idUser) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + `departments/dismiss/${idUser}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();
}

async function patchEditDepartament(idDepartament, body) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + `departments/${idDepartament}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
}

async function deleteDepartament(idDepartament) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + `departments/${idDepartament}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function patchEditUser(idUser, body) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + `admin/update_user/${idUser}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
  console.log(response);
}

async function deleteUser(idUser) {
  const token = getTokenLocal();

  const request = await fetch(baseUrl + `admin/delete_user/${idUser}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export {
  getCheckTypeUser,
  getAllCompanies,
  getDepartaments,
  postCreateDepartament,
  getAllUser,
  patchAdmission,
  patchDismiss,
  patchEditDepartament,
  deleteDepartament,
  patchEditUser,
  deleteUser,
};
