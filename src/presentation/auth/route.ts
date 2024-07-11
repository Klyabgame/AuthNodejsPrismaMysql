import { Router } from "express"
import { AuthController } from "./controller";
import { EmailService } from "../services/email.service";
import { envs } from "../../config";
import { AuthDatasourceImpl } from "../../infrastructure/datasource/auth.datasource.impl";
import { AuthRepositoryImpl } from "../../infrastructure/repository/auth.repository.impl";

export class AuthRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        const emailService= new EmailService(
            envs.MAILER_SERVICE,
            envs.MAILER_EMAIL,
            envs.MAILER_SECRET_KEY
            )
        const authDatasource=new AuthDatasourceImpl(emailService);
        const authRepository=new AuthRepositoryImpl(authDatasource);
        const authController=new AuthController(authRepository);

        router.post('/login',authController.loginAuth);
        //router.get('/:dni',AuthController.getEmployeesOne);
        router.post('/logout',authController.logoutAuth);
        router.post('/register',authController.registerAuth);
        //router.put('/:dni',AuthController.updateEmployees);
        //router.delete('/:dni',AuthController.deleteEmployees);
        router.get('/validate-email/:token',authController.tokenAuthEmail);
        router.get('/validate-token',authController.validateTokenAccessAuth);

        return router;
    }
}