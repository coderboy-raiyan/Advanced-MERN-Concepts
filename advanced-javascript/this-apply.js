class NovoAir {
  constructor() {
    this.bookings = [];
  }

  book(flightName, Id) {
    this.bookings.push({ flightName, passengerId: Id });
    return this.bookings;
  }
}

const bangladesh = new NovoAir();

const book = bangladesh.book;

const JagoAir = {
  flightName: "JAGO50",
  passengerId: 23,
  bookings: [],
};
console.log(JagoAir);
book.call(JagoAir, JagoAir.flightName, JagoAir.passengerId);
console.log(JagoAir);
