class Subscriber {
  update(data) {
    throw new Error("update method must be implemented");
  }
}

class WeatherStation {
  #subscribers = [];

  addSubscriber(subscriber) {
    this.#subscribers.push(subscriber);
    return this;
  }

  removeSubscriber(subscriber) {
    const index = this.#subscribers.indexOf(subscriber);
    index !== 1 && this.#subscribers.splice(index, 1);
    return this;
  }

  setConditions(conditions) {
    this.#subscribers.forEach((subscriber) => subscriber.update(conditions));
  }
}
// TODO: Implement a ConcreteSubscriber class that inherits from Subscriber and overrides the update method to print: "".
class ConcreteSubscriber extends Subscriber {
  #name;

  constructor(name) {
    super();
    this.#name = name;
  }

  update(conditions) {
    console.log(`${this.#name} received new weather conditions: ${conditions}`);
  }
}

const weatherStation = new WeatherStation();
const subscriber1 = new ConcreteSubscriber("Subscriber 1");
const subscriber2 = new ConcreteSubscriber("Subscriber 2");

weatherStation.addSubscriber(subscriber1);
weatherStation.addSubscriber(subscriber2);

weatherStation.setConditions("Sunny 25°C");
weatherStation.removeSubscriber(subscriber1);
weatherStation.setConditions("Rainy 18°C");
