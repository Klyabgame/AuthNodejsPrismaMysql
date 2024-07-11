import cloudinary from 'cloudinary';
import { envs } from '../envs';

cloudinary.v2.config({
    cloud_name:envs.CLOUD_NAME ,
    api_key: envs.API_KEY,
    api_secret: envs.API_SECRET,
    secure:true,
});

export const CloudinaryServer=()=> {
    
    return cloudinary.v2
}