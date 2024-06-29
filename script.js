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
// code for create table in main page
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const tableName = document.getElementById("tableName").value;
  const noofSeats = document.getElementById("tableSeats").value;
  const designType = document.querySelector(".tabletype .selected img").src;
  createTablecard(tableName, designType, noofSeats);
  form.reset();
  closeModal();
});

function createTablecard(name, img, seats) {
  const container = document.getElementById("tablecontainer");
  const tableCard = document.createElement("div");
  tableCard.className = "card";
  const tablename = document.createElement("h3");
  tablename.textContent = name;
  const tabledesign = document.createElement("img");
  tabledesign.src = img;
  const seatCount = document.createElement("p");
  seatCount.textContent = `Total seat:${seats} seat`;
  const buttoncontainer = document.createElement("div");
  buttoncontainer.className = "buttoncontainer";
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.onclick = () => tableCard.remove();

  const editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  buttoncontainer.appendChild(deleteButton);
  buttoncontainer.appendChild(editButton);
  
  tableCard.appendChild(tablename);

  tableCard.appendChild(tabledesign);
  tableCard.appendChild(seatCount);
  container.appendChild(tableCard);
  tableCard.appendChild(buttoncontainer);
}
