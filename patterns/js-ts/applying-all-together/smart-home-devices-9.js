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

class ColorChangeDecorator extends LightDecorator {
  color;

  constructor(light, color) {
    super(light);
    this.color = color;
  }

  turnOn() {
    return `${super.turnOn()}, color: ${this.color}`;
  }
}

let light = new Light();
light = new ColorChangeDecorator(light, "red");
light = new ColorChangeDecorator(light, "green");
light = new ColorChangeDecorator(light, "blue");
console.log(light.turnOn());
