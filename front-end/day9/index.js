const seats = document.querySelectorAll(".seat");

let availableSeats = document.querySelector("#available-seats");
let bookedSeats = document.querySelector("#booked-seats");

//It updates the count of available seats and booked seats according to seatCount
//seatCount > 0 => seat is booked
//seatCount < 0 => seat is unbooked
const updateSeatCount = (seatCount) => {
  availableSeats.innerText = parseInt(availableSeats.innerText) - seatCount;
  bookedSeats.innerText = parseInt(bookedSeats.innerText) + seatCount;
};

const bookSeat = (e) => {
  if (e.target.className.includes("booked")) {
    e.target.className = "seat";
    updateSeatCount(-1);
  } else {
    e.target.className = "seat booked";
    updateSeatCount(1);
  }
};

[...seats].forEach((seat) => {
  seat.addEventListener("click", bookSeat);
});
