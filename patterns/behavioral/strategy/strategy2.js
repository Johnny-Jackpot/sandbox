class PaymentStrategy {
  pay(amount) {
    throw new Error("Method 'pay()' must be implemented.");
  }
}

class CreditCardStrategy extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Credit Card: ${this.cardNumber}`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paid ${amount} using PayPal: ${this.email}`);
  }
}

class BitcoinStrategy extends PaymentStrategy {
  constructor(walletAddress) {
    super();
    this.walletAddress = walletAddress;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Bitcoin: ${this.walletAddress}`);
  }
}

class ShoppingCart {
  #strategy;

  setPaymentStrategy(strategy) {
    this.#strategy = strategy;
    return this;
  }

  checkout(amount) {
    this.#strategy
      ? this.#strategy.pay(amount)
      : console.log("No payment strategy set.");
  }
}

const cart = new ShoppingCart();
const paymentStrategies = [
  new CreditCardStrategy("1234-5678-9876-5432"),
  new PayPalStrategy("user@example.com"),
  new BitcoinStrategy("1A2b3C4d5E6f7G8h9I0j1K2L3m4N5o6P7"),
];

paymentStrategies.forEach((strategy) => {
  cart.setPaymentStrategy(strategy).checkout(100);
});
