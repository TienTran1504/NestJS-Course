import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities, { User } from './typeorm';
@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ttientommy15042002',
      database: 'tutorial_db',
      entities: entities,
      synchronize: true, // đồng bộ với database
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
