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

export { getAllCompanies, getBySectorCompanies, getAllSectors };
