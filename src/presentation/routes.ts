import { Router } from "express"
import { AuthRoutes } from "./auth/route";

export class MainRoutes{

    constructor(){}

    static get routes():Router{
        const router=Router();

        router.use('/api/auth',AuthRoutes.routes);

        return router;
    }
}