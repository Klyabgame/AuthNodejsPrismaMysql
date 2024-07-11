import { CustomError } from "../errors/custom.error";


export class AuthEntity{

    public  id_auth:string;
    public  password:string;
    public  foto_url:string;
    public  nombres:string;
    public  apellidos:string;
    public  correo:string;
    public  correo_validado:boolean;
    public  telefono:string;


    constructor(
        id_auth:string,
        password:string,
        foto_url:string,
        nombres:string,
        apellidos:string,
        correo:string,
        correo_validado:boolean,
        telefono:string
        

    ){
        this.id_auth=id_auth;
        this.password=password,
        this.foto_url=foto_url,
        this.nombres=nombres,
        this.apellidos=apellidos,
        this.correo=correo,
        this.correo_validado=correo_validado,
        this.telefono=telefono
    }

    public static fromObject(obj:{[key:string]:any}):AuthEntity{

        const {
            id_auth,
            password,
            foto_url,
            nombres,
            apellidos,
            correo,
            correo_validado,
            telefono
            }=obj;

        if(!id_auth) throw CustomError.badRequest('no existe el id') ;
        if(!password) throw CustomError.badRequest('no existe el password') ;
        if(!nombres) throw CustomError.badRequest('no existe el nombres') ;
        if(!apellidos) throw CustomError.badRequest('no existe el apellido') ;
        if(!correo) throw CustomError.badRequest('no existe el correo') ;
        if(correo_validado===undefined) throw CustomError.badRequest('no existe el correo_validado') ;


        return new AuthEntity(id_auth,
            password,
            foto_url,
            nombres,
            apellidos,
            correo,
            correo_validado,
            telefono);

    }



}