class Device {
  operate() {
    throw new Error("Method not implemented");
  }
}

class Light extends Device {
  operate() {
    return "Light is on";
  }
}

class Fan extends Device {
  operate() {
    return "Fan is on";
  }
}

class DeviceFactory {
  static createDevice(deviceType) {
    switch (deviceType) {
      case "light":
        return new Light();
      case "fan":
        return new Fan();
      default:
        throw new Error(`Unknown device type: ${deviceType}`);
    }
  }
}

class EUPlugInterface {
  plugIntoEUSocket() {
    throw new Error("Method must be implemented");
  }
}

class DeviceAdapter extends EUPlugInterface {
  #device;

  constructor(device) {
    super();
    this.#device = device;
  }

  plugIntoEUSocket() {
    return this.#device.operate();
  }
}

const light = new DeviceAdapter(DeviceFactory.createDevice("light"));
console.log(light.plugIntoEUSocket());

const fan = new DeviceAdapter(DeviceFactory.createDevice("fan"));
console.log(fan.plugIntoEUSocket());
