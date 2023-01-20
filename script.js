const element = document.querySelector("[data-button]");
const button = document.getElementById("share-icon");

button.addEventListener("click", () => {
  element.classList.toggle("visible");
  console.log("okay boomer");
});
