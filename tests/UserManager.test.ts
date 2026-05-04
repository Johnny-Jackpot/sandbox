import { UserManager } from '../src/UserManager';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('addUser adds a valid user', () => {
    const user = 'john';
    userManager.addUser(user);
    expect(userManager.getUsers()).toContain(user);
  })
});