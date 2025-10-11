class MessageFormatStrategy {
  formatMessage(message) {
    throw "formatMessage method must be implemented";
  }
}

class UppercaseMessageFormat extends MessageFormatStrategy {
  formatMessage(message) {
    return message.toUpperCase();
  }
}

class LowercaseMessageFormat extends MessageFormatStrategy {
  formatMessage(message) {
    return message.toLowerCase();
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  receiveMessage(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

class Command {
  execute() {
    throw "Execute method must be implemented";
  }
}

class ChatRoom {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message) {
    this.users.forEach((user) => user.receiveMessage(message));
  }
}

class ChatCommand extends Command {
  #chatRoom;
  #messageFormatStrategy;
  #message;
  constructor(chatRoom, messageFormatStrategy, message) {
    super();
    this.#chatRoom = chatRoom;
    this.#messageFormatStrategy = messageFormatStrategy;
    this.#message = message;
  }

  execute() {
    const formattedMessage = this.#messageFormatStrategy.formatMessage(
      this.#message
    );
    this.#chatRoom.sendMessage(formattedMessage);
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob");

const chatRoom = new ChatRoom();
chatRoom.addUser(user1);
chatRoom.addUser(user2);

const uppercaseChatCommand = new ChatCommand(
  chatRoom,
  new UppercaseMessageFormat(),
  "Hello world!"
);
uppercaseChatCommand.execute();

const lowerChatCommand = new ChatCommand(
  chatRoom,
  new LowercaseMessageFormat(),
  "Hello world!"
);
lowerChatCommand.execute();
