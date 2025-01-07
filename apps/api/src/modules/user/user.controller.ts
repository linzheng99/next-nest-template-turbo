import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getMe(@Request() req: { user: User }) {
    return this.userService.findById(req.user.id);
  }
}
