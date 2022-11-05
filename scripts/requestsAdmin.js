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

//   console.log(response);
    return  response
}


export { getCheckTypeUser, getAllCompanies, getDepartaments };
