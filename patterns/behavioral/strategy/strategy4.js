class SerializationStrategy {
  serialize() {
    throw new Error("serialize method must be implemented");
  }
}

class JsonSerialization extends SerializationStrategy {
  serialize(obj) {
    return `JSON representation of ${JSON.stringify(obj)}`;
  }
}

class XmlSerialization extends SerializationStrategy {
  serialize(obj) {
    return `XML representation of ${JSON.stringify(obj)}`;
  }
}

class Serializer {
  #strategy;

  setSerializationStrategy(strategy) {
    this.#strategy = strategy;
  }

  serialize(data) {
    if (!this.#strategy) {
      throw new Error("No serialization strategy set");
    }

    return this.#strategy.serialize(data);
  }
}

const serializer = new Serializer();
const jsonStrategy = new JsonSerialization();
const xmlStrategy = new XmlSerialization();
const data = { name: "John", age: 30, city: "New York" };

serializer.setSerializationStrategy(jsonStrategy);
console.log(serializer.serialize(data));

serializer.setSerializationStrategy(xmlStrategy);
console.log(serializer.serialize(data));
