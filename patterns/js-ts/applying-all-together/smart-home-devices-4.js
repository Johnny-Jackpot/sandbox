class Subject {
  observers = [];

  add(observer) {
    this.observers.push(observer);
    return this;
  }

  remove(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
    return this;
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class SecuritySystem extends Subject {}

class Observer {
  update(data) {
    throw new Error("Observer update method must be implemented.");
  }
}

class SecurityApp extends Observer {
  update(data) {
    console.log(`SecurityApp notified. New state: ${data}`);
  }
}

class SecurityLight extends Observer {
  update(data) {
    console.log(`SecurityLight activated! State: ${data}`);
  }
}

const securitySystem = new SecuritySystem();
securitySystem.add(new SecurityApp()).add(new SecurityLight());
securitySystem.notify("Intrusion detected");

class TemperatureControlStrategy {
  controlTemperature(temperature) {
    throw new Error("TemperatureControlStrategy method must be implemented.");
  }
}

class HeatingStrategy extends TemperatureControlStrategy {
  controlTemperature(temperature) {
    console.log(`Heating to ${temperature} degrees.`);
  }
}

class CoolingStrategy extends TemperatureControlStrategy {
  controlTemperature(temperature) {
    console.log(`Cooling to ${temperature} degrees.`);
  }
}

class ClimateControl {
  #strategy;

  constructor(strategy) {
    this.#strategy = strategy;
  }

  setStrategy(strategy) {
    this.#strategy = strategy;
  }

  controlTemperature(temperature) {
    this.#strategy.controlTemperature(temperature);
  }
}

const climateControl = new ClimateControl(new HeatingStrategy());
climateControl.controlTemperature(22);

climateControl.setStrategy(new CoolingStrategy());
climateControl.controlTemperature(18);

const strategies = {
  heating: HeatingStrategy,
  cooling: CoolingStrategy,
};
let strategy = new strategies.heating();
strategy.controlTemperature(22);

strategy = new strategies.cooling();
strategy.controlTemperature(18);
