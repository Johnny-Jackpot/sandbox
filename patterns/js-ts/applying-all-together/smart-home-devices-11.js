class SmartKeyManager {
  constructor() {
    if (SmartKeyManager.instance) {
      return SmartKeyManager.instance;
    }
    SmartKeyManager.instance = this;
  }

  static getInstance() {
    SmartKeyManager.instance =
      SmartKeyManager.instance || new SmartKeyManager();

    return SmartKeyManager.instance;
  }

  unlockDoor() {
    console.log("Door is unlocked");
  }

  lockDoor() {
    console.log("Door is locked");
  }
}

const keyManager1 = SmartKeyManager.getInstance();
keyManager1.unlockDoor();
const keyManager2 = SmartKeyManager.getInstance();
keyManager2.lockDoor();
console.log(keyManager1 === keyManager2);
