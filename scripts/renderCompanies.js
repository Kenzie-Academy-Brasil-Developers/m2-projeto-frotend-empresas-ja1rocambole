async function renderCardsCompanies(array) {
  const ul = document.querySelector("#list-companies");
  ul.innerHTML = "";

  array.forEach((element) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `
          <li class="card-companies">
                  <h3>${element.name}</h3>
                  <p>${element.opening_hours}</p>
                  <span>${element.sectors.description}</span>
          </li>
        `
    );
  });
}
export { renderCardsCompanies };
