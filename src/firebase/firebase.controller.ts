import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { FirebaseService } from './firebase.services';

@Controller('User')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('createUser')
  createName(@Body('name') name: string) {
    return this.firebaseService.createUser(name);
  }

  @Get('getUserByName')
  getName(@Query('name') name: string) {
  return this.firebaseService.getUserByName(name);
  }


  @Put('updateUser/:id')
  updateName(@Param('id') id: string, @Body('name') name: string) {
    return this.firebaseService.updateUser(id, name);
  }

  @Delete('deleteUser/:id')
  deleteName(@Param('id') id: string) {
    return this.firebaseService.deleteUser(id);
  }

  @Get('getAllUsers')
  getAllNames() {
    return this.firebaseService.getUsers();
  }
}
