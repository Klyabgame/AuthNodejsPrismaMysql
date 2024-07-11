

export class UpdateAuthDto{

    private constructor(
        public readonly id:number,
        public readonly password:string,
        public readonly foto_url:string,
        public readonly nombres:string,
        public readonly apellidos:string,
        public readonly correo:string,
        public readonly telefono:string,
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        if (this.id) returnObj.id=this.id;
        if (this.nombres) returnObj.nombres=this.nombres;
        if (this.apellidos) returnObj.apellidos=this.apellidos;
        if (this.correo) returnObj.correo=this.correo;
        if (this.telefono) returnObj.telefono=this.telefono;
        if (this.password) returnObj.password=this.password;
        if (this.foto_url) returnObj.foto_url=this.foto_url;

        return returnObj;
    }

    static create(props:{[key:string]:any}):[string?, UpdateAuthDto?]{
        const {
            id,
            password,
            foto_url,
            nombres,
            apellidos,
            correo,
            telefono
            }=props;

            if ( !id || isNaN( Number(id)) ) {
                return ['id must be a valid number'];
              }
            

        return [undefined,new UpdateAuthDto(
                id,
                password,
                foto_url,
                nombres,
                apellidos,
                correo,
                telefono
                )]
    }


}