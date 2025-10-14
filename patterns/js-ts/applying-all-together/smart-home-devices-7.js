class Light {
  turnOn() {
    return "Light is on";
  }

  turnOff() {
    return "Light is off";
  }
}

class LightDecorator extends Light {
  light;

  constructor(light) {
    super();
    this.light = light;
  }

  turnOn() {
    return this.light.turnOn();
  }

  turnOff() {
    return this.light.turnOff();
  }
}

class RedLightDecorator extends LightDecorator {
  color = "red";

  turnOn() {
    return `${super.turnOn()}, with color: ${this.color}`;
  }
}

class BlueLightDecorator extends LightDecorator {
  color = "blue";

  turnOn() {
    return `${super.turnOn()}, with color: ${this.color}`;
  }
}

class Command {
  execute() {
    throw new Error("Method must be implemented");
  }
}

class LightOnCommand extends Command {
  #light;

  constructor(light) {
    super();
    this.#light = light;
  }

  execute() {
    return this.#light.turnOn();
  }
}

class LightOffCommand extends Command {
  #light;

  constructor(light) {
    super();
    this.#light = light;
  }

  execute() {
    return this.#light.turnOff();
  }
}

class RemoteControl {
  #commands = {};

  addCommand(name, command) {
    this.#commands[name] = command;
  }

  pressButton(name) {
    return this.#commands[name]?.execute();
  }
}

const light = new Light();

const remoteCtrl = new RemoteControl();
remoteCtrl.addCommand("on", new LightOnCommand(light));
remoteCtrl.addCommand("off", new LightOffCommand(light));

console.log(remoteCtrl.pressButton("on"));
console.log(remoteCtrl.pressButton("off"));

const coloredLight = new BlueLightDecorator(new RedLightDecorator(light));
remoteCtrl.addCommand("colored-on", new LightOnCommand(coloredLight));
console.log(remoteCtrl.pressButton("colored-on"));
console.log(remoteCtrl.pressButton("off"));
