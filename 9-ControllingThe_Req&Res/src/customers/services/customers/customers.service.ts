import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'tien@dsafas',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'tien@dsafas',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'tien@dsafas',
      createdAt: new Date(),
    },
  ];
  findCustomer() {
    return {
      id: 1,
      email: 'tien@dsafas',
      created: new Date(),
    };
  }
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
