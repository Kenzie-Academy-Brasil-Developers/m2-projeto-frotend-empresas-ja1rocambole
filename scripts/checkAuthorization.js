import { getTokenLocal } from "./getTokenLocal.js";
import { getCheckTypeUser } from "./requestsAdmin.js";

async function checkUserType() {
  const token = getTokenLocal();

  const responseAdminOurUser = await getCheckTypeUser(token);

  if (responseAdminOurUser !== true) {
    window.location.replace("../home");
  }
}

export { checkUserType };
