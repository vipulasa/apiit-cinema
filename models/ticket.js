console.info("tickets model loaded");

document.addEventListener("alpine:init", () => {
  Alpine.store("ticket", {
    name: "Ticket Model",
    timeSlots: [
      {
        id: 1,
        start: "10:00",
        end: "12:00",
        price: {
          adult: 500,
          child: 200,
        },
      },
      {
        id: 2,
        start: "13:30",
        end: "15:30",
        price: {
          adult: 500,
          child: 200,
        },
      },
      {
        id: 3,
        start: "16:00",
        end: "18:00",
        price: {
          adult: 550,
          child: 250,
        },
      },
      {
        id: 4,
        start: "18:30",
        end: "20:30",
        price: {
          adult: 600,
          child: 300,
        },
      },
      {
        id: 5,
        start: "21.30",
        end: "23:30",
        price: {
          adult: 600,
          child: 300,
        },
      },
    ],
    slots: [
      {
        id: 1,
        title: "Blue Seat",
      },
      {
        id: 2,
        title: "Blue Seat",
      },
      {
        id: 3,
        title: "Blue Seat",
      },
      {
        id: 4,
        title: "Blue Seat",
      },
      {
        id: 5,
        title: "Blue Seat",
      },
    ],
  });
});
