import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  customers: Customer[] = [
    {
      id: 1,
      email: 'tien@dsafas',
      name: 'Tien BieBer',
    },
    {
      id: 2,
      email: 'tien@dsafas',
      name: 'Tien BieBer',
    },
    {
      id: 3,
      email: 'tien@dsafas',
      name: 'Tien BieBer',
    },
  ];
  getCustomers() {
    return this.customers;
  }
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
