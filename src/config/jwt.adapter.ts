import jwt from 'jsonwebtoken';
import { envs } from './envs';

export class jwtAdapter{


    static async generateToken(payload:any,duration:string ="2h",jwt_seed:string=envs.JWT_SEED){

        
        return new Promise((resolve) => {
            jwt.sign({
              data:`${payload}`
            }, jwt_seed,{expiresIn:duration} ,(err:any, token:any) => {
              
              if ( err ) return resolve(null);
              resolve(token)
      
            });
          })
      


    }

    static async validateToken(token:string,jwt_seed:string=envs.JWT_SEED){

      return new Promise((resolve)=>{

        jwt.verify(token,jwt_seed,(err:any,decoded)=>{

          if (err) {
            return resolve(null);
          }
          return resolve(decoded);
        })
      })
    }
}