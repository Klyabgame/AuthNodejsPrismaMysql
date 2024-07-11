
import { bcryptAdapter, envs, jwtAdapter, prisma } from "../../config";
import { AuthEntity, CustomError, LoginAuthDto } from "../../domain";
import { AuthDatasource } from "../../domain/datasource/auth.datasource";
import { CreateAuthDto } from "../../domain/dtos/auth/create-auth.dto";
import { EmailService } from "../../presentation/services/email.service";

export class AuthDatasourceImpl implements AuthDatasource{

     constructor(
         readonly emailService:EmailService
    ){}


    async postLoginAuth(loginAuthDto: LoginAuthDto): Promise<AuthEntity> {
        const auth= await prisma.tb_auth.findFirst({
            where:{
                correo:loginAuthDto.correo
            }
        })
        if(!auth) throw CustomError.badRequest('Email o Password incorrectos-email');
        const passwordUnhashed=bcryptAdapter.compare(loginAuthDto.password,auth.password);
        if(!passwordUnhashed) throw CustomError.badRequest('Email o Password incorrectos-password');
        
        return AuthEntity.fromObject(auth);
    }
    

    async postRegisterAuth(createAuthDto: CreateAuthDto): Promise<AuthEntity> {
        const existEmail= await prisma.tb_auth.findFirst({
            where:{
                correo:createAuthDto.correo
            }
        })   
        if(existEmail) throw CustomError.badRequest('el email ya existe');

        const hashedPasword=bcryptAdapter.hash(createAuthDto.password);

        await this.sendEmailValidationLink(createAuthDto.correo);
        try {
            const auth=await prisma.tb_auth.create({
                data:{
                    ...createAuthDto,
                    password:hashedPasword
                }
            });
    
            return AuthEntity.fromObject(auth);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }



    private async sendEmailValidationLink(email:string){

        const token=await jwtAdapter.generateToken(email);
        
        if(!token) throw CustomError.internalServer('Errror getting token');

        const link= `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
        const html=`
            <h1>VALIDA TU EMAIL </h1>
            <p> click on the following link to validate your email</p>
            <a href="${link}">validate tour email:${email}</a>
        `;

        const options={
            to:email,
            subject:'Validate your email',
            htmlBody:html
        }

        const isSent=await this.emailService.sendEmail(options);
        if(!isSent) throw CustomError.internalServer('error sending email');

        return true;

    }


}