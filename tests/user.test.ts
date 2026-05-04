import { User, fetchUser } from "../src/User";

describe('User', () => {
  let user: User;
  const name = 'Jane Doe';
  const email = 'jane@example.com';

  beforeEach(() => {
    user = new User(name, email);
  });

  it('Creates user correctly', () => {
    expect(user.getName()).toBe(name);
    expect(user).toBeInstanceOf(User);
  })

  describe("User email tests", () => {
    it('getEmail returns correct email', () => {
      expect(user.getEmail()).toBe(email);
    })

    it('email contains @ symbol', () => {
      expect(user.getEmail()).toContain('@');
    })

    it('invalid email throws an error', () => {
      expect(() => {
        new User('Invalid', 'invalid-email');
      }).toThrow('Invalid email');
    })
  })

  describe('fetchUser', () => {
    it('fetches data asynchronously', async () => {
      const user = await fetchUser();
      expect(user).toEqual({
        name: 'John Doe',
        email: 'john@example.com',
      })
    })
  })
});