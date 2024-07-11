import { CreateAuthDto } from "../../dtos";
import { AuthEntity } from "../../entitys";
import { AuthRepository } from "../../repository/user.repository";


export interface CreateAuthUseCase{
    execute(dto:CreateAuthDto):Promise<AuthEntity>
}

export class CreateAuth implements CreateAuthUseCase{

    constructor(
        private readonly repository:AuthRepository,
    ){}

    execute(dto: CreateAuthDto): Promise<AuthEntity> {
        return this.repository.postRegisterAuth(dto);
    }

}