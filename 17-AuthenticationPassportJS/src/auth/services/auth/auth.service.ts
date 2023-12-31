import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    console.log('Inside validateUser');
    const userDB = await this.userService.findUserByUsername(username);
    if (userDB && userDB.password === password) {
      console.log('User Validation Success');
      return userDB;
    }
    console.log('User Validation Fail');
    return null;
  }
}
