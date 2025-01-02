interface TransportStrategy {
  transport(): void;
}

class CarStrategy implements TransportStrategy {
  transport(): void {
    console.log('Driving to work by car');
  }
}

class BusStrategy implements TransportStrategy {
  transport(): void {
    console.log('Going to work by bus');
  }
}

class BikeStrategy implements TransportStrategy {
  transport(): void {
    console.log('Cycling to work');
  }
}

class Commuter {
  private strategy: TransportStrategy;

  setStrategy(strategy: TransportStrategy): void {
    this.strategy = strategy;
  }

  goToWork(): void {
    if (!this.strategy) {
      throw new Error('Strategy is not defined');
    }

    this.strategy.transport();
  }
}

const commuter = new Commuter();
commuter.setStrategy(new CarStrategy());
commuter.goToWork();

commuter.setStrategy(new BusStrategy());
commuter.goToWork();