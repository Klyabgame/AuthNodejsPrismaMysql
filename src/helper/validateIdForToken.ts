// para retornar el usuario al momento de validar el token del login
import { jwtAdapter, prisma } from "../config";
import { CustomError } from "../domain";

export const validateUserForToken=async(token:any)=>{

    const verifyUser:any =await jwtAdapter.validateToken(token);
     if(!verifyUser) throw CustomError.unauthorized('usuario no permitido');

    const dataUserAcces=await prisma.tb_auth.findUnique({
        where:{
            id_auth:verifyUser.data
        }
    })

    return dataUserAcces;
}