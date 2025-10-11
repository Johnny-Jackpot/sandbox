class Follower {
  update(news) {
    throw new Error("You have to implement the method update!");
  }
}

class Blog {
  #followres = [];

  addFollower(follower) {
    this.#followres.push(follower);
    return this;
  }

  newPost(post) {
    this.#followres.forEach((follower) => follower.update(post));
  }
}

class ConcreteFollower extends Follower {
  #name;
  constructor(name) {
    super();
    this.#name = name;
  }

  update(blogPost) {
    console.log(`${this.#name} received new blog post: ${blogPost}`);
  }
}

const blog = new Blog();
const follower1 = new ConcreteFollower("Follower 1");
const follower2 = new ConcreteFollower("Follower 2");

blog.addFollower(follower1);
blog.addFollower(follower2);

blog.newPost("How to use Observer Pattern");
blog.newPost("Advanced JavaScript Tips");
