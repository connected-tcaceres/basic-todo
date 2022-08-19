import { IsInt } from 'class-validator';

export class LoginDto {
  @IsInt()
  id: number;
}
