function getTokenLocal() {
  const tokenLocal = localStorage.getItem("token");

  return JSON.parse(tokenLocal);
}
export { getTokenLocal };
