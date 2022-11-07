import { postLogin, getCheckTypeUser } from "./requests.js";

function eventLogin() {
  const form = document.querySelector("#form-login");
  const elements = [...form.elements];

  const buttonLogin = document.querySelector("#button-login");
  //   console.log(buttonLogin);
  //   console.log(elements);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {};

    elements.forEach((element) => {
      if (element.tagName == "INPUT" && element.value !== "") {
        body[element.name] = element.value;
      }
    });

    const tokenObj = await postLogin(body);

    if (
      tokenObj.error == "email invalid!" ||
      tokenObj.error == "password invalid!"
    ) {
      window.alert("Email ou senha incorretos");
    } else {
      const token = tokenObj.token;

      localStorage.setItem("token", JSON.stringify(token));

      const checkAdminOurUser = await getCheckTypeUser(token);
      const adminTrueOurFalse = checkAdminOurUser.is_admin;

      if (adminTrueOurFalse) {
        window.location.replace("../admin");
        console.log("seria redirecionado p/ admin");
      } else {
        window.location.replace("../user");
        console.log("seria redirecionado p/ user");
      }
    }
  });
}
export { eventLogin };
