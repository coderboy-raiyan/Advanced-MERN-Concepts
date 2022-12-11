const eventEmitter = require("events");

class Store extends eventEmitter {
  constructor() {
    super();
  }
  Open() {
    this.emit("bellRing", "open the door");
  }
}

const store = new Store();

store.on("bellRing", (data) => {
  console.log(data);
});
