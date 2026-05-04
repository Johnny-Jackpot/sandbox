import { ILogger, UserManager } from '../src/UserManager';

class FakeLogger implements ILogger {
  public logs: string[] = [];
  
  log(message: string): void {
    this.logs.push(message);
  }
}

describe('UserManager', () => {
  let userManager: UserManager;
  let logger: FakeLogger;

  beforeEach(() => {
    logger = new FakeLogger();
    userManager = new UserManager(logger);
  });

  it('addUser adds a valid user', () => {
    const user = 'john';
    userManager.addUser(user);
    expect(userManager.getUsers()).toContain(user);
  })

  it('addUser logs when we add a user', () => {
    const user = 'john';
    userManager.addUser(user);
    expect(logger.logs).toContain('User john added');
  })
});