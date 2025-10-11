class PaymentStrategy {
  pay() {
    throw new Error("pay mathod should be implemented");
  }
}

class CreditCardStrategy extends PaymentStrategy {
  #cardNumber;

  constructor(cardNumber) {
    super();
    this.#cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Credit Card: ${this.#cardNumber}`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  #email;

  constructor(email) {
    super();
    this.#email = email;
  }

  pay(amount) {
    console.log(`Paid ${amount} using PayPal: ${this.#email}`);
  }
}

// It should have a method checkout that accepts an amount and uses strategy's pay method, or logs "No payment strategy set."

class ShoppingCart {
  #paymentStrategy;

  setPaymentStrategy(strategy) {
    this.#paymentStrategy = strategy;
  }

  checkout(amount) {
    this.#paymentStrategy
      ? this.#paymentStrategy.pay(amount)
      : console.log("No payment strategy set.");
  }
}

const cart = new ShoppingCart();

const creditCard = new CreditCardStrategy("1234-5678-9876-5432");
const paypal = new PayPalStrategy("user@example.com");

cart.setPaymentStrategy(creditCard);
cart.checkout(100);

cart.setPaymentStrategy(paypal);
cart.checkout(200);
