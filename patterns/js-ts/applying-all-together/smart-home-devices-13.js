class Notification {
  msg;

  constructor(msg) {
    this.msg = msg;
  }

  send() {
    throw new Error("Method send must be impelmented");
  }
}
class TextNotification extends Notification {
  send() {
    console.log(`Sending text notification: ${this.msg}`);
  }
}
class EmailNotification extends Notification {
  email;

  constructor(msg, email) {
    super(msg);
    this.email = email;
  }

  send() {
    console.log(
      `Sending email notification: ${this.msg}, email: ${this.email}`
    );
  }
}
class NotificationGroup extends Notification {
  notifications = [];

  addNotification(notification) {
    this.notifications.push(notification);
    return this;
  }

  send() {
    this.notifications.forEach((notification) => notification.send());
  }
}

const group1 = new NotificationGroup();
group1
  .addNotification(new TextNotification("Hello world"))
  .addNotification(
    new EmailNotification("Email notification", "test@test.com")
  );
const group2 = new NotificationGroup();
group2
  .addNotification(new TextNotification("Test 1"))
  .addNotification(new TextNotification("Test 2"))
  .addNotification(new TextNotification("Test 3"));

const mainGroup = new NotificationGroup();
mainGroup
  .addNotification(group1)
  .addNotification(group2)
  .addNotification(new TextNotification("Test 4"))
  .addNotification(new EmailNotification("Test 5", "test@test.com"));

mainGroup.send();
