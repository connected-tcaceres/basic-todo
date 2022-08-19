import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: number) {
    const user = await this.userService.findOne(id);
    // skipping password check
    if (user) {
      return user;
    }
    return null;
  }

  verifyJwt(jwt: string) {
    return this.jwtService.verify(jwt);
  }

  async login(id: number) {
    const user = await this.userService.findOne(id);

    if (!user) {
      return null;
    }

    const payload = {
      username: user.username,
      sub: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    return this.jwtService.sign(payload);
  }
}
