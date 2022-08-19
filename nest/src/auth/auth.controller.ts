import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Res,
  HttpStatus,
  HttpCode,
  Get,
  Req,
} from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('whoami')
  @ApiOkResponse({ type: Number })
  @ApiUnauthorizedResponse()
  async whoami(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { jwt } = request.cookies;
    const jwtUserInfo = this.authService.verifyJwt(jwt);
    const isValid = !!jwtUserInfo;

    if (!isValid) {
      response.clearCookie('jwt');
      throw new UnauthorizedException();
    }

    return jwtUserInfo.sub;
  }

  @Post('login')
  @Public()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse()
  @ApiUnauthorizedResponse()
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(loginDto.id);
    if (!jwt) {
      response.clearCookie('jwt');
      throw new UnauthorizedException();
    }
    response.cookie('jwt', jwt, { httpOnly: true });
  }
}
