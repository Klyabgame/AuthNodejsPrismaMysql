import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  DATABASE_URL: get('DATABASE_URL').required().asString(),
  
  JWT_SEED:get('JWT_SEED').required().asString(),

  MAILER_SERVICE:get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL:get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY:get('MAILER_SECRET_KEY').required().asString(),
  
  WEBSERVICE_URL:get('WEBSERVICE_URL').required().asString(),

  CLOUD_NAME:get('CLOUD_NAME').required().asString(),
  API_KEY:get('API_KEY').required().asString(),
  API_SECRET:get('API_SECRET').required().asString(),

}