class Observer {
  update() {
    throw new Error("Method must be impelmented");
  }
}

class HomeOwner extends Observer {
  update(data) {
    console.log(`HomeOwner received: ${data}`);
  }
}
class Subject {
  obeservers = [];
  attach(observer) {
    this.obeservers.push(observer);
    return this;
  }
  detach(observer) {
    this.obeservers = this.obeservers.filter((obs) => obs !== observer);
    return this;
  }
  notify(data) {
    this.obeservers.forEach((observer) => observer.update(data));
  }
}

class SecuritySystem extends Subject {}

const securitySystem = new SecuritySystem();
securitySystem.attach(new HomeOwner()).notify("Intruder alert");
