import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities, { User } from './typeorm';
import { AuthModule } from './auth/auth.module';
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
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
