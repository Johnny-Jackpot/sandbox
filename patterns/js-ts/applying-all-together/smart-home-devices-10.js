class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2);

class SmartHomeDevice {
  name = "";
  sensors = [];
  actuators = [];
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

  setName(name) {
    this.device.name = name;
    return this;
  }

  build() {
    return this.device;
  }
}

const builder = new SmartHomeDeviceBuilder();
const device = builder
  .addActuator("LED")
  .addSensor("Light Sensor")
  .setName("Smart Light")
  .build();

console.log(device.name);

class DeviceComponent {
  name;

  constructor(name) {
    this.name = name;
  }

  operation() {
    throw new Error('Method "operation()" must be implemented.');
  }
}

class LeafDevice extends DeviceComponent {
  operation() {
    console.log(`Leaf ${this.name} operation`);
  }
}

class CompositDevice extends DeviceComponent {
  #children = [];

  add(component) {
    this.#children.push(component);
    return this;
  }

  operation() {
    console.log(`Composite ${this.name} operation`);
    this.#children.forEach((component) => component.operation());
  }
}

const composit = new CompositDevice("Room");
composit.add(new LeafDevice("Light")).add(new LeafDevice("Fan")).operation();

class SmartDeviceFactory {
  createSensor() {
    throw new Error('Method "createSensor()" must be implemented.');
  }

  createActuator() {
    throw new Error('Method "createActuator()" must be implemented.');
  }
}

class LightFactory extends SmartDeviceFactory {
  createSensor() {
    return new LightSensor();
  }

  createActuator() {
    return new LEDActuator();
  }
}

class FanFactory extends SmartDeviceFactory {
  createSensor() {
    return new TemperatureSensor();
  }

  createActuator() {
    return new MotorActuator();
  }
}

class LightSensor {
  constructor() {
    console.log("Light sensor created");
  }
}

class LEDActuator {
  constructor() {
    console.log("LED Actuator created");
  }
}

class TemperatureSensor {
  constructor() {
    console.log("Temperature Sensor created");
  }
}

class MotorActuator {
  constructor() {
    console.log("Motor Actuator created");
  }
}

const lightFactory = new LightFactory();
const lightSensor = lightFactory.createSensor();
const lightActuator = lightFactory.createActuator();

const fanFactory = new FanFactory();
const fanSensor = fanFactory.createSensor();
const fanActuator = fanFactory.createActuator();
