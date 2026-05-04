import { User, fetchUser } from "../src/user";

describe('User', () => {
  it('Creates user correctly', () => {
    const name = 'Jane Doe';
    const email = 'jane@example.com';
    const user = new User(name, email);

    expect(user.getName()).toBe(name);
    expect(user.getEmail()).toBe(email);
    expect(user).toBeInstanceOf(User);
  })
});