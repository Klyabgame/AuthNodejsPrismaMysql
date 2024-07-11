import { UploadedFile } from "express-fileupload";
import { UUID } from "../config";


export const imageSettings={

    EditName:(image:UploadedFile)=>{

        const spaceName=image.name.split('.');
        const newName=UUID()+'.'+spaceName[1];

        return {
            ...image,
            name:newName,
        }
        
    },

    validateTypeMime:(image:UploadedFile)=>{
        
        const spaceMimeType=image.mimetype.split('/');
        const typesMime=['jpg','png','gif','jpeg'];
        if(typesMime.includes(spaceMimeType[1])){
            return true
        }else {
            return false
        }     
    }
}