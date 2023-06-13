import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Tien', email: 'tientran@gmail.com' };
  }

  @Get('query')
  getUsersByQuery(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ username: 'Tien', email: 'tientran@gmail.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Tien',
        email: 'TienTran@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUserPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
    ];
  }

  @Post('')
  createUser(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.send('Created');
  }

  @Post('create')
  createUser2(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Req() req: Request, @Res() res: Response) {
    const userID = req.params;
    console.log(req.params);
    res.send(userID);
  }

  @Get('getuser/:id')
  getUserById2(@Param('id') id: string) {
    console.log(id);
    return { id };
  }

  @Get(':id/:postId')
  getPostByUserId(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id, postId);
    return { id, postId };
  }
}
