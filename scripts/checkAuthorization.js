import { getTokenLocal } from "./getTokenLocal.js";
import { getCheckTypeUser } from "./requestsAdmin.js";

async function checkUserTypeAdmin() {
  const token = getTokenLocal();

  const responseAdminOurUser = await getCheckTypeUser(token);

  if (responseAdminOurUser !== true) {
    window.location.replace("../home");
  }
}
async function checkUserTypeUser() {
  const token = getTokenLocal();

  const responseAdminOurUser = await getCheckTypeUser(token);

  if (responseAdminOurUser == true) {
    window.location.replace("../home");
  }
}

export { checkUserTypeAdmin, checkUserTypeUser };
