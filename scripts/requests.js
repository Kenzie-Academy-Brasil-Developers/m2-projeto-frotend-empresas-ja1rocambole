const baseUrl = "http://localhost:6278/";

async function getAllCompanies() {
  const request = await fetch(baseUrl + "companies");

  const response = await request.json();

  return response;
}

async function getBySectorCompanies(sector) {
  const request = await fetch(baseUrl + `companies/${sector}`);

  const response = await request.json();

  return response;
}

async function getAllSectors() {
  const request = await fetch(baseUrl + "sectors");

  const response = await request.json();

  return response;
}

async function postLogin(body) {
  const request = await fetch(baseUrl + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();

  return response;
}

async function postRegister(body) {
  const request = await fetch(baseUrl + "auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();

  return response;
}

async function getCheckTypeUser(token) {
  const request = await fetch(baseUrl + "auth/validate_user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await request.json();

  return response;
}

export {
  getAllCompanies,
  getBySectorCompanies,
  getAllSectors,
  postLogin,
  postRegister,
  getCheckTypeUser,
};
