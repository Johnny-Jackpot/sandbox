class Observer {
  update(news) {
    throw new Error("You have to implement the method update!");
  }
}

class WeatherStation {
  constructor() {
    this.observers = [];
  }

  /**
   *
   * @param {Observer} observer
   * @returns {this}
   */
  addObserver(observer) {
    this.observers.push(observer);
    return this;
  }

  /**
   *
   * @param {Observer} observer
   * @returns {this}
   */
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    index !== -1 && this.observers.splice(index, 1);
    return this;
  }

  /**
   *
   * @param {Number} temperature
   */
  setTemperature(temperature) {
    this.observers.forEach((observer) => observer.update(temperature));
  }
}

class ConcreteObserver extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(temperature) {
    console.log(`${this.name} received temperature update: ${temperature}°C`);
  }
}

const weatherStation = new WeatherStation();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

weatherStation.addObserver(observer1);
weatherStation.addObserver(observer2);

weatherStation.setTemperature(25);
weatherStation.removeObserver(observer1);
weatherStation.setTemperature(30);
