document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("tableName");
    const seats = localStorage.getItem("tableSeats");
    const design = localStorage.getItem("tableDesign");
  
    if (name && seats && design) {
      showDetailedView(name, parseInt(seats, 10), design);
    }
  });
  
  function showDetailedView(name, seats, design) {
    const detailedName = document.getElementById("tableName");
    const seatingArrangement = document.getElementById("seatingArrangement");
  
    detailedName.textContent = name;
  
   
    if (design.includes("design1.png")) {
      detailedName.classList.add("round-table");
    } else {
      detailedName.classList.add("square-table");
    }
  
    seatingArrangement.innerHTML = "";
  
    for (let i = 1; i <= seats; i++) {
      const seatContainer = document.createElement("div");
      seatContainer.className = "seat-container";
  
      const seat = document.createElement("div");
      seat.className = "seat not-assigned";
      seat.id = `seat${i}`;
      seat.textContent = "Add";
      seat.addEventListener("click", () => {
        if (seat.classList.contains("not-assigned")) {
          seat.classList.remove("not-assigned");
          seat.classList.add("assigned");
          seat.textContent = "Fathima";
        } else {
          seat.classList.remove("assigned");
          seat.classList.add("not-assigned");
          seat.textContent = "Add";
        }
      });
  
      const seatNumber = document.createElement("div");
      seatNumber.className = "seat-number";
      seatNumber.textContent = `Seat ${i}`;
  
      seatContainer.appendChild(seat);
      seatContainer.appendChild(seatNumber);
      seatingArrangement.appendChild(seatContainer);
    }
  }
  
  function closeDetailView() {
    window.location.href = "index.html";
  }
  