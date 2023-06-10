import { Controller, Delete, Get, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import {} from 'http';


// users here is resource & methods is actions FYI: if resource is more than five actions you need anther controller 

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'hello ahmed fahmy';
  }
  @Get()
  findById(): string {
    return 'this is the use you want';
  }

  @Post()
  create(@Req() req:Request): string {
    // @Req is decorator from nest to access requests 
    console.log(req.body);
    
    return 'created';
  }

  @Patch()
  update(): string {
    return 'patched';
  }
  @Delete()
  remove(): string {
    return 'removed';
    //good to leave
  }
}
