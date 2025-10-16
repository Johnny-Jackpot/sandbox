class SmartDeviceFactory {
  createSensor() {
    throw new Error("Method must be implemented");
  }
  createActuator() {
    throw new Error("Method must be implemented");
  }
}

class Sensor {}
class Actuator {}

class LightSensor extends Sensor {
  constructor() {
    super();
    console.log("Light Sensor created");
  }
}

class LEDActuator extends Actuator {
  constructor() {
    super();
    console.log("LED Actuator created");
  }
}

class TemperatureSensor extends Sensor {
  constructor() {
    super();
    console.log("Temperature Sensor created");
  }
}

class MotorActuator extends Actuator {
  constructor() {
    super();
    console.log("Motor Actuator created");
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
// Usage for LightFactory
const lightFactory = new LightFactory();
const lightSensor = lightFactory.createSensor(); // Output: Light Sensor created
const lightActuator = lightFactory.createActuator(); // Output: LED Actuator created

// Usage for FanFactory
const fanFactory = new FanFactory();
const fanSensor = fanFactory.createSensor(); // Output: Temperature Sensor created
const fanActuator = fanFactory.createActuator(); // Output: Motor Actuator created
