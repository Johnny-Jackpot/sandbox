class Device {
  operate() {
    throw new Error("operate method must be implemented");
  }
}

class Light extends Device {
  operate() {
    return "Light is turned on";
  }
}

class Fan extends Device {
  operate() {
    return "Fan is spinning";
  }
}

class DeviceFactory {
  createDevice(type) {
    switch (type) {
      case "light":
        return new Light();
      case "fan":
        return new Fan();
      default:
        throw new Error("Unknown device type");
    }
  }
}

const factory = new DeviceFactory();

const device1 = factory.createDevice("light");
console.log(device1.operate());

const device2 = factory.createDevice("fan");
console.log(device2.operate());

class UsPlugInterface {
  plugInUsSocket() {
    throw new Error("Method must be implemented");
  }
}

class LightAdapter extends UsPlugInterface {
  #light;

  constructor(light) {
    super();
    this.#light = light;
  }

  plugInUsSocket() {
    return this.#light.operate();
  }
}

const lightAdapter = new LightAdapter(new Light());
console.log(lightAdapter.plugInUsSocket());

class FanAdapter extends UsPlugInterface {
  #fan;

  constructor(fan) {
    super();
    this.#fan = fan;
  }

  plugInUsSocket() {
    return this.#fan.operate();
  }
}

const fanAdapter = new FanAdapter(new Fan());
console.log(fanAdapter.plugInUsSocket());
