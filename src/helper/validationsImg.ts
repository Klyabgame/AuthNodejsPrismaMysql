import { UploadedFile } from "express-fileupload";
import { imageSettings } from "./uploadImageSettings";
import path from "path";
import fs from "fs";
import { CloudinaryServer } from "../config";

export const validationsImg={
    
    validationImg:async(foto:UploadedFile | undefined | null):Promise<string>=>{
        
        const foto_url_Default='https://res.cloudinary.com/dt86tk7ed/image/upload/v1715448290/PERSONAL-DATA-BACKEND/kn9krio5avobvcz6sr1m.jpg';
        if(!foto) return foto_url_Default;

        const validateType=imageSettings.validateTypeMime(foto);
        if(!validateType) throw new Error('Los tipos de archivo aceptados son jpg,png,gif y jpeg');
         //CAMBIAR EL NOMBRE DEL ARCHIVO 
        const newImage=imageSettings.EditName(foto);
        const tempFilePath=path.join(__dirname,newImage.name);
        fs.writeFileSync(tempFilePath,newImage.data)

        const uploadCloudinaryImage=await CloudinaryServer().uploader.upload(tempFilePath,{folder:'PERSONAL-DATA-BACKEND'});
        fs.unlinkSync(tempFilePath);

        const cloudinarySecure_url=uploadCloudinaryImage.secure_url;

        return cloudinarySecure_url;
    },


    validationImgPlus:async(foto:{[key:string]:any})=>{

        const fotoArray=Object.entries(foto); //convierte el objeto en un array tipo [ ['key','valor'] , ['key2','valor2'] ]
        
        
        
        let securUrlArray=[]
        for(let prop in fotoArray){
            if(fotoArray[prop][1]===null || undefined) {
                return securUrlArray=[null];
            }
        
            const validateType=imageSettings.validateTypeMime(fotoArray[prop][1]);
            if(!validateType) throw new Error('Los tipos de archivo aceptados son jpg,png,gif y jpeg');
            //CAMBIAR EL NOMBRE DEL ARCHIVO 
            const newImage=imageSettings.EditName(fotoArray[prop][1]);
            const tempFilePath=path.join(__dirname,newImage.name);
            fs.writeFileSync(tempFilePath,newImage.data)

            const uploadCloudinaryImage=await CloudinaryServer().uploader.upload(tempFilePath,{folder:'PERSONAL-DATA-BACKEND/employes'});
            fs.unlinkSync(tempFilePath);
            const cloudinarySecure_url=uploadCloudinaryImage.secure_url;

            securUrlArray.push(cloudinarySecure_url)        
        }
        return securUrlArray;
        

    }
}