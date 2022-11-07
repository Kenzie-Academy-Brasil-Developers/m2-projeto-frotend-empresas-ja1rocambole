function closeModal() {
  const buttonClose = document.querySelector(".close-modal");
  const modal = document.querySelector(".background-modal");

  buttonClose.addEventListener("click", () => {
    modal.remove();
  });
}
function closeModalNow() {
  const buttonClose = document.querySelector(".close-modal");
  const modal = document.querySelector(".background-modal");

  modal.remove();
}

export { closeModal, closeModalNow };
