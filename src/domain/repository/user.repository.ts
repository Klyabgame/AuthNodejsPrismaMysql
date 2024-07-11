import { CreateAuthDto, LoginAuthDto } from "../dtos";
import { AuthEntity } from "../entitys";



export abstract class AuthRepository{

  abstract postRegisterAuth(createAuthDto:CreateAuthDto):Promise<AuthEntity>;
  abstract postLoginAuth(loginAuthDto:LoginAuthDto):Promise<AuthEntity>;

}