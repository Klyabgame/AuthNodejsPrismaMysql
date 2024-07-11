
import { jwtAdapter, prisma } from "../config";
import { CustomError } from "../domain";

export const validateEmailData=async(token:string)=>{

        const emailVerified:any= await jwtAdapter.validateToken(token);
        if(!emailVerified) throw CustomError.badRequest('el correo ingresado no es valido para la verificacion');
        const verifyData=await prisma.tb_auth.findFirst({
            where:{
                correo:emailVerified.data
            }
        })
        if(!verifyData) throw CustomError.badRequest('no se encontro el usuario con el correo ingresado');

        if (verifyData.correo_validado===false) {
            const updateEmailVerify= await prisma.tb_auth.update({
                where:{
                    id_auth:verifyData?.id_auth
                },
                data:{
                    correo_validado:true
                }
            })
            if(!updateEmailVerify) throw CustomError.internalServer('Ocurrio un problema al validar al usuario');
            return {
                email:updateEmailVerify.correo
            }
            
        }else {
            throw CustomError.badRequest('el correo ingresado ya esta validado')
        }

        

}