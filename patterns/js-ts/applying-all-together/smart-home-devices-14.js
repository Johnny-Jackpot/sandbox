class SmartHomeDevice {
  sensors = [];
  actuators = [];

  showDetails() {
    const sensors = this.sensors.join(", ");
    const actuators = this.actuators.join(", ");
    console.log(`SmartHomeDevice Sensors: ${sensors}, Actuators: ${actuators}`);
  }
}

class SmartHomeDeviceBuilder {
  device;

  constructor() {
    this.device = new SmartHomeDevice();
  }

  addSensor(sensor) {
    this.device.sensors.push(sensor);
    return this;
  }

  addActuator(actuator) {
    this.device.actuators.push(actuator);
    return this;
  }

  build() {
    return this.device;
  }
}

const builder = new SmartHomeDeviceBuilder();
const device = builder
  .addSensor("Light Sensor")
  .addSensor("Temperature Sensor")
  .addActuator("LED")
  .addActuator("Heater")
  .build();

device.showDetails();
