const serializers = {
  json: (data: object) => `JSON representation of ${JSON.stringify(data)}`,
  xml: (data: object) => `XML representation of ${JSON.stringify(data)}`,
};
const john = { name: "John", age: 30, city: "New York" };
console.log(serializers["json"](john));
console.log(serializers["xml"](john));
