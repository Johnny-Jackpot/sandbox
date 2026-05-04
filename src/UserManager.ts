export class UserManager {
  private users: string[] = [];

  public addUser(user: string): this {
    this.users.push(user);
    return this;
  }

  public getUsers(): string[] {
    return this.users;
  }
}