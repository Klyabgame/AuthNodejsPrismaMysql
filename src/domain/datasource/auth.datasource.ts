import { CreateAuthDto, LoginAuthDto } from "../dtos";
import { AuthEntity } from "../entitys";


export abstract class AuthDatasource{

  abstract postRegisterAuth(createAuthDto:CreateAuthDto):Promise<AuthEntity>;
  abstract postLoginAuth(loginAuthDto:LoginAuthDto):Promise<AuthEntity>;


}