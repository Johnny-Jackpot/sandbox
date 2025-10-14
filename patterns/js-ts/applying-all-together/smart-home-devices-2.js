class Device {
  operateOn() {
    throw new Error("Method must be implemented");
  }

  operateOff() {
    throw new Error("Method must be implemented");
  }
}

class Light extends Device {
  operateOn() {
    return "Light is on";
  }

  operateOff() {
    return "Light is off";
  }
}

class Fan extends Device {
  operateOn() {
    return `Fan is on`;
  }

  operateOff() {
    return "Fan is off";
  }

  setSpeed(speed) {
    return `Fan speed: ${speed}`;
  }
}

class DeviceFactory {
  createDevice() {
    throw new Error("Method must be implemented");
  }
}

class LightFactory extends DeviceFactory {
  createDevice() {
    return new Light();
  }
}

class FanFactory extends DeviceFactory {
  createDevice() {
    return new Fan();
  }
}

const lightFactory = new LightFactory();
const light = lightFactory.createDevice();
console.log(light.operateOn());
console.log(light.operateOff());

const fanFactory = new FanFactory();
const fan = fanFactory.createDevice();
console.log(fan.operateOn());
console.log(fan.setSpeed(12));
console.log(fan.operateOff());
