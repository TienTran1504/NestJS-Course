import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'Tien',
      password: '1234',
    },
    {
      id: 2,
      username: 'Tien2',
      password: '12342',
    },
    {
      id: 3,
      username: 'Tien3',
      password: '12343',
    },
    {
      id: 4,
      username: 'Tien4',
      password: '12344',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
