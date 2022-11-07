import { getAllUser } from "./requestsAdmin.js";
import { createCardsUsers } from "./createCardUsers.js";

async function renderCardUsers() {
  const arrayAllUsers = await getAllUser();

  const arrayUsers = arrayAllUsers.filter((value) => {
    if (value.is_admin !== true) {
      return value;
    }
  });

  createCardsUsers(arrayUsers);
}

export { renderCardUsers };
