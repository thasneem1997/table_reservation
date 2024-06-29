// code of modal
const addButton = document.querySelector(".btn");
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

addButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
// code for icon
const increementIcon = document.querySelector(".btn1");
const decrementIcon = document.querySelector(".btn2");
const currentValue = document.getElementById("tableSeats");

function increementIconClick(event) {
  event.preventDefault();
  let integerValue = parseInt(currentValue.value, 10);
  currentValue.value = integerValue + 1;
}

function decrementIconClick(event) {
  event.preventDefault();
  let integerValue = parseInt(currentValue.value, 10);
  if (integerValue > 0) {
    currentValue.value = integerValue - 1;
  }
}
increementIcon.addEventListener("click", increementIconClick);

decrementIcon.addEventListener("click", decrementIconClick);
//  code for design icon
const designOptions = document.querySelectorAll(".tabletype label");

function applyBorder(event) {
  designOptions.forEach((option) => option.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
}

designOptions.forEach((option) => {
  option.addEventListener("click", applyBorder);
});
