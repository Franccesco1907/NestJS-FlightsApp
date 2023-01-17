import { IsNotEmpty } from 'class-validator';
import { IsEmail, IsString } from 'class-validator/types/decorator/decorators';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
