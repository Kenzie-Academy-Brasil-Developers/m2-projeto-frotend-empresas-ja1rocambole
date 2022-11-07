function menuHamburger() {
  const menuHamburger = document.querySelector("#checkbox-menu");
  const iconHamburger = document.querySelector(".iconHamburger");

  menuHamburger.addEventListener("click", () => {
    const modalHidden = document.querySelector(".modal-login-cadastro");

    if (menuHamburger.checked) {
      iconHamburger.classList.add("point-none");

      modalHidden.classList.remove("hidden-modal");

      modalHidden.classList.remove("hidden");

      modalHidden.classList.add("show-modal");
      setTimeout(() => {
        iconHamburger.classList.remove("point-none");
      }, 1000);
    } else {
      iconHamburger.classList.add("point-none");

      modalHidden.classList.remove("show-modal");

      modalHidden.classList.add("hidden-modal");

      setTimeout(() => {
        modalHidden.classList.add("hidden");
        iconHamburger.classList.remove("point-none");
      }, 1000);
    }
  });
}

export { menuHamburger };
