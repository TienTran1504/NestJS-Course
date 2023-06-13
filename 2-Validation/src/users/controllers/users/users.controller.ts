import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
@Controller('users')
export class UsersController {
  @Get('')
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    return [{ username: 'Tien', email: 'tientran@gmail.com' }];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser2(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
