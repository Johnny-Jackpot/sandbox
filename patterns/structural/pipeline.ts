class Pipeline<T> {
  constructor(private param: T) {
  }

  through(...funcs: Array<(param: T) => T>): Pipeline<T> {
    funcs.forEach(func => {
      this.param = func(this.param);
    });

    return this;
  }

  result(): T {
    return this.param;
  }
}

const pipeline = new Pipeline<number>(5);
const result = pipeline
  .through(param => param + 2)
  .through(param => param * 3)
  .through(param => param - 1)
  .result();
