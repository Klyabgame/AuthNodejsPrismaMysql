import express, { Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';


interface Options{
    port:number,
    routes:Router,
    public_path?:string;
}

export class Server{
    
        private readonly app=express();
        private serverListener?:any;
        private readonly port:number;
        private readonly publicPath:string;
        private readonly routes:Router;

    constructor(options:Options){
        const {port,routes,public_path='public'}=options;

        this.port=port;
        this.publicPath=public_path;
        this.routes=routes;
    }

    //colocar todas las llamadas:middlewares,routes,spa etc.
    async start(){
        //middlewares
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use( express.json() ); // raw
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
          }));

        //Routes
        this.app.use(this.routes);


        this.serverListener=this.app.listen(this.port,()=>{
            console.log(`la conexion se realizo en el puerto ${this.port}`);
            
        })


    }

    //cerrar la conexion

    public close(){
        this.serverListener?.close();
    }



}