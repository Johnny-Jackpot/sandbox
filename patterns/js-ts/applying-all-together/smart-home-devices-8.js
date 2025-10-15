class Device {
  turnOn() {
    throw new Error("Method turnOn must be implemented");
  }

  turnOff() {
    throw new Error("Method turnOff must be implemented");
  }
}
class Light extends Device {
  turnOn() {
    return "Light is on";
  }

  turnOff() {
    return "Light is off";
  }
}
class Fan extends Device {
  turnOn() {
    return "Fan is on";
  }

  turnOff() {
    return "Fan is off";
  }
}
class DeviceFactory {
  createDevice() {
    throw new Error("Method createDevice must be implemented");
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
class Command {
  execute() {
    throw new Error("Method execute must be implemented");
  }
}
class TurnOnCommand extends Command {
  /**
   * @type {Device}
   */
  #device;

  /**
   *
   * @param {Device} device
   */
  constructor(device) {
    super();
    this.#device = device;
  }

  execute() {
    return this.#device.turnOn();
  }
}
class TurnOffCommand extends Command {
  /**
   * @type {Device}
   */
  #device;

  /**
   *
   * @param {Device} device
   */
  constructor(device) {
    super();
    this.#device = device;
  }

  execute() {
    return this.#device.turnOff();
  }
}
class RemoteControl {
  #commands = {};

  /**
   *
   * @param {string} name
   * @param {Command} command
   */
  setCommand(name, command) {
    this.#commands[name] = command;
    return this;
  }

  /**
   *
   * @param {string} name
   */
  pressButton(name) {
    const command = this.#commands[name];
    if (!command) {
      throw new Error(`Invalid command: ${name}`);
    }

    return command.execute();
  }
}
const light = new Light();
const fan = new Fan();
const remoteCtrl = new RemoteControl();
remoteCtrl
  .setCommand("fan-on", new TurnOnCommand(fan))
  .setCommand("fan-off", new TurnOffCommand(fan))
  .setCommand("light-on", new TurnOnCommand(light))
  .setCommand("light-off", new TurnOffCommand(light));

console.log(remoteCtrl.pressButton("fan-on"));
console.log(remoteCtrl.pressButton("fan-off"));
console.log(remoteCtrl.pressButton("light-on"));
console.log(remoteCtrl.pressButton("light-off"));
