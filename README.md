# BASE DE CODIGO LOGIN CON NODEJS, PRISMA Y MYSQL

### PASOS PARA EJECUTAR EL PROYECTO CORRECTAMENTE.

1. Ejecutar el siguiente comando para empezar:
    ```
        npm install
    ```

2. Variables de Entorno - .env

    ```
    DATABASE_URL="mysql://userExample:passwordExample@ipdelservidorExample:3306/nombre_BD" <- Colocar el enlace de tu bd , en caso no este usando un servidor en la nube colocar ipdelservidorExample=localhost

    JWT_SEED="colocarClaveSecretaCualquiera" <- escribir cualquier palabra, esto sirve para firmar los jwt-token


    MAILER_SERVICE="servicio de mail example:gmail" <- escribir el mail que se esta usando ejemplo: gmail,hotmail, preferible gmail.  
    
    MAILER_EMAIL="correo perteneciente a ese mail" <- escribir tu correo perteneciente al MAILER_SERVICE.

    MAILER_SECRET_KEY="clave secreta del mail para hacer la conexion" <- esta clave secreta te la da el mismo servicio de google.

    WEBSERVICE_URL=http://localhost:3000/api <- el link fue creado para redireccionar al usuario una vez confirma su correo en este caso de forma local, en caso lo deploye debera colocar el link de la pagina + /api 

    CLOUD_NAME=    <- variable de entorno que te da cloudinary
    API_KEY=       <- variable de entorno que te da cloudinary
    API_SECRET=    <- variable de entorno que te da cloudinary
    ```
    > Con estos datos que son los mas importantes, el proyecto ya deberia funcionar de manera correcta.

    
3. Crear tu Base de Datos
    
    - Ya sea en local o en un servidor privado en la nube, se debe crear la bd, las cuales deben tener su USUARIO , PASSWORD para poder acceder a ellas.
    - Una vez creada se debera ejecutar el siguiente codigo en la consola del proyecto.
    ```
        npx prisma db push
    ```
    > Esto nos sera util para poder subir el modelo de prisma a nuestra bd que viene por defecto, luego se podra editar o cambiar de acuerdo a sus necesidades.

    - Si por x o y razones hace algun cambio en su bd para actualizar esos cambios en su prisma, debera ejecutar el siguiente comando:
    ```
        npx prisma db pull
    ```
    > si todo es correcto, la app ya estaria lista.