class Subscriber {
  update(news) {
    throw new Error("Method not implemented");
  }
}

class BlogPublisher {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  }

  publish(article) {
    this.subscribers.forEach((subscriber) => subscriber.update(article));
  }
}

class ConcreteSubscriber extends Subscriber {
  #name;
  constructor(name) {
    super();
    this.#name = name;
  }

  update(article) {
    console.log(`${this.#name} received a new article: ${article}`);
  }
}

const blogPublisher = new BlogPublisher();
const subscriber1 = new ConcreteSubscriber("Subscriber 1");
const subscriber2 = new ConcreteSubscriber("Subscriber 2");

blogPublisher.addSubscriber(subscriber1);
blogPublisher.addSubscriber(subscriber2);

blogPublisher.publish("New Article 1");
blogPublisher.removeSubscriber(subscriber1);
blogPublisher.publish("New Article 2");
