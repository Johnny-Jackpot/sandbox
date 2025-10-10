type SubscriberFn = (data: string) => void;

// @ts-ignore: Duplicate identifier 'WeatherStation'
class WeatherStation {
  private subscribers: SubscriberFn[] = [];
  addSubscriber(subscriber: SubscriberFn) {
    this.subscribers.push(subscriber);
    return this;
  }

  removeSubscriber(subscriber: SubscriberFn) {
    const index = this.subscribers.indexOf(subscriber);
    index !== -1 && this.subscribers.splice(index, 1);
    return this;
  }

  setConditions(conditions: string) {
    this.subscribers.forEach((subscriber) => subscriber(conditions));
  }
}
// @ts-ignore: Duplicate identifier 'weatherStation'
const weatherStation = new WeatherStation();
const sub1 = (conditions: string) =>
  console.log(`Sub 1 received: ${conditions}`);
const sub2 = (conditions: string) =>
  console.log(`Sub 2 received: ${conditions}`);
const sub3 = (conditions: string) =>
  console.log(`Sub 3 received: ${conditions}`);

weatherStation.addSubscriber(sub1).addSubscriber(sub2).addSubscriber(sub3);

weatherStation.setConditions("Sunny 25°C");
weatherStation.removeSubscriber(sub2);
weatherStation.setConditions("Rainy 18°C");
