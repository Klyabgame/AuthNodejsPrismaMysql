import { AuthEntity, LoginAuthDto } from "../../domain";
import { AuthDatasource } from "../../domain/datasource/auth.datasource";
import { CreateAuthDto } from "../../domain/dtos/auth/create-auth.dto";
import { AuthRepository } from "../../domain/repository/user.repository";


export class AuthRepositoryImpl implements AuthRepository{

    constructor(
        private readonly userDatasource:AuthDatasource,
    ){}
    postLoginAuth(loginAuthDto: LoginAuthDto): Promise<AuthEntity> {
        return this.userDatasource.postLoginAuth(loginAuthDto);
    }

    postRegisterAuth(createAuthDto: CreateAuthDto): Promise<AuthEntity> {
        return this.userDatasource.postRegisterAuth(createAuthDto);
    }
    

}