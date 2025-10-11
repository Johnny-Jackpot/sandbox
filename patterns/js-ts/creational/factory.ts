type UserData = { id: string, name: string };

abstract class User {
  public id: string;
  public name: string;

  constructor(userData: UserData) {
    this.id = userData.id;
    this.name = userData.name;
  }
}

class AdminUser extends User {
}

class ModeratorUser extends User {
}

class RegularUser extends User {
}

type UserType = 'admin' | 'moderator' | 'regular';

class UserFactory {
  static createUser(type: UserType, data: UserData): User {
    switch (type) {
      case 'admin':
        return new AdminUser(data);
      case 'moderator':
        return new ModeratorUser(data);
      case 'regular':
        return new RegularUser(data);
      default:
        throw new Error('Unknown user type');
    }
  }
}

const admin = UserFactory.createUser('admin', { id: '1', name: 'Admin' });
const moderator = UserFactory.createUser('moderator', { id: '2', name: 'Moderator' });
const regular = UserFactory.createUser('regular', { id: '3', name: 'Regular' });

