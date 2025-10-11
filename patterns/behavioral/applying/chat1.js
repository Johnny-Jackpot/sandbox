class Command {
  execute() {
    throw "Execude method must be implemented";
  }
}

class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  receiveMessage(message) {
    console.log(`${this.#name} received message: ${message}`);
  }
}

class ChatRoom {
  #users = [];

  addUser(user) {
    this.#users.push(user);
    return this;
  }

  showMessage(message) {
    console.log(`Message: ${message}`);
  }

  sendMessage(message) {
    this.#users.forEach((user) => user.receiveMessage(message));
  }
}

class ChatCommand extends Command {
  #chatRoom;
  #message;

  constructor(chatRoom, message) {
    super();
    this.#chatRoom = chatRoom;
    this.#message = message;
  }

  execute() {
    this.#chatRoom.showMessage(this.#message);
    this.#chatRoom.sendMessage(this.#message);
  }
}

const alice = new User("Alice");
const bob = new User("Bob");

const chatRoom = new ChatRoom();
chatRoom.addUser(alice).addUser(bob);

const chatCommand = new ChatCommand(chatRoom, "Hello, everyone!");
chatCommand.execute();
