import { LoginAuthDto } from "../../dtos";
import { AuthEntity } from "../../entitys";
import { AuthRepository } from "../../repository/user.repository";

export interface LoginAuthUseCase{
    execute(dto:LoginAuthDto):Promise<AuthEntity>
}

export class LoginAuth implements LoginAuthUseCase{

    constructor(
        private readonly repository:AuthRepository,
    ){}

    execute(dto: LoginAuthDto): Promise<AuthEntity> {
        return this.repository.postLoginAuth(dto);
    }

}