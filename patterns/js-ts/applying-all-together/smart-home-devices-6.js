class TemperatureControlStrategy {
  controlTemperature() {
    throw new Error("Method must be implemented");
  }
}

class HeatingStrategy extends TemperatureControlStrategy {
  controlTemperature(t) {
    console.log(`Heating to ${t}`);
  }
}
class CoolingStrategy extends TemperatureControlStrategy {
  controlTemperature(t) {
    console.log(`Cooling to ${t}`);
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

  controlTemperature(t) {
    this.#strategy.controlTemperature(t);
  }
}

const climateControl = new ClimateControl(new HeatingStrategy());
climateControl.controlTemperature(22);
climateControl.setStrategy(new CoolingStrategy());
climateControl.controlTemperature(18);
