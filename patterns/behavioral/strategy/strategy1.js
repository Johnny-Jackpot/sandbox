class PaymentStrategy {
  pay(amount) {
    throw new Error(
      "Classes extending PaymentStrategy must implement the 'pay' method."
    );
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

class AmazonPayStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Amazon Pay: ${this.email}`);
  }
}

class ShoppingCart {
  constructor() {
    this.strategy = null;
  }

  setPaymentStrategy(strategy) {
    this.strategy = strategy;
  }

  checkout(amount) {
    if (this.strategy) {
      this.strategy.pay(amount);
    } else {
      console.log("No payment strategy set.");
    }
  }
}

const cart = new ShoppingCart();

const creditCard = new CreditCardStrategy("1234-5678-9876-5432");
const paypal = new PayPalStrategy("user@example.com");
const amazon = new AmazonPayStrategy("amazon@user.com");

cart.setPaymentStrategy(creditCard);
cart.checkout(100);

cart.setPaymentStrategy(paypal);
cart.checkout(150);

cart.setPaymentStrategy(amazon);
cart.checkout(200);
