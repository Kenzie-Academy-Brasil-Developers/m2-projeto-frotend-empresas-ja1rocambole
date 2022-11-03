function buttonReplace(button, replace) {
  addEventListener;
  button.addEventListener("click", () => {
    window.location.replace(`${replace}`);
  });
}

export { buttonReplace };
