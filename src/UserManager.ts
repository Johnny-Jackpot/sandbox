export interface ILogger {
  log(message: string): void;
}

export class UserManager {
  public constructor(private logger: ILogger) {}

  private users: string[] = [];

  public addUser(user: string): this {
    this.users.push(user);
    this.logger.log(`User ${user} added`);
    return this;
  }

  public getUsers(): string[] {
    return this.users;
  }
}