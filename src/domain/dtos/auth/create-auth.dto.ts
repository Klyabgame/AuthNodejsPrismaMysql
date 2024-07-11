import { regularExps } from "../../../config";


export class CreateAuthDto{

    private constructor(
        public readonly id_auth:string,
        public readonly password:string,
        public readonly foto_url:string,
        public readonly nombres:string,
        public readonly apellidos:string,
        public readonly correo:string,
        public readonly telefono:string,
    ){}

    static create(props:{[key:string]:any}):[string?, CreateAuthDto?]{

        

        const {
            id_auth,
            password,
            foto_url,
            nombres,
            apellidos,
            correo,
            telefono
            }=props;

            if (!nombres) return ['Tiene que escribir un nombre',undefined];
            if (!apellidos) return ['Tiene que escribir un apellido',undefined];
            if (!correo) return ['Tiene que escribir un correo ',undefined];
            if (!regularExps.email.test(correo)) return ['el correo no es valido',undefined];
            if (!password) return ['Tiene que colocar un password ',undefined];
            if (password.legth<6) return ['el password debe tener mas de 6 letras ',undefined];




        return [undefined,new CreateAuthDto(
                id_auth,
                password,
                foto_url,
                nombres,
                apellidos,
                correo,
                telefono,
                )]
    }


}