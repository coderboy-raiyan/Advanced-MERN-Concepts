const car1 = {
  version: "0.0.1",
  name: "Lamborgini",
  models: [],
  startCar(version) {
    this.models.push(
      this.name + version + " Serial:" + Math.floor(Math.random() * 9)
    );
  },
};

const car2 = {
  version: "0.0.2",
  name: "Aston Martin",
  models: [],
};

const bookAModel = car1.startCar.bind(car2);

bookAModel("0.0.2");

console.log(car2);
console.log(car1);
