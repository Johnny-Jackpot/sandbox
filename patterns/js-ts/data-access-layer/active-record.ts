const USERS: Record<string, unknown> = {};

class User {
  constructor(public id: string, public name: string, public email: string) {}

  static async find(id: string): Promise<User | null> {
    const record = USERS[id] as User;
    if (!record) return null;
    return new User(record.id, record.name, record.email);
  }

  async save(): Promise<void> {
    const {id, name, email} = this;
    USERS[id] = {id, name, email};
  }

  async delete(): Promise<void> {
    delete USERS[this.id];
  }
}


const main = async() => {
  const user = new User('1012', 'Test', 'test@example.com');
  await user.save();
  console.log(USERS);
  
  if (user) {
    const user = await User.find('1012');
    await user?.delete();
  }
  console.log(USERS);
}

main();