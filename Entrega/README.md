# Proyecto final del curso Backend de Coderhouse
### *Por Iván Villarrubia.*
___



# DESCRIPCIÓN:



## CONSIGNA:

- [X] Consigna 1
- [X] Consigna 1
- [X] Consigna 1
- [X] Consigna 1
- [X] Consigna 1
- [X] Consigna 1
- [X] Consigna 1
- [X] Consigna 1

## CARACTERÍSTICAS:

- App realizada mediante:
    - [Node.js](https://nodejs.org/en/)
    - [Express](https://expressjs.com/es/)
    - [Npm](https://www.npmjs.com/)


- Plantillas visualización:
    - [Handlebars](https://handlebarsjs.com/)


- Paquetes npm usados:
```
"dependencies": {
    "bcrypt": "^5.1.0",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.7.1",
    "multer": "^1.4.5-lts.1",
    "node": "^18.11.0",
    "nodemailer": "^6.8.0",
    "nodemon": "^2.0.19"
  }
```



# Acceso a la aplicación

Caga de dependencias
```
npm install
```

Terminal:
``` 
> npm start
```

Navegador:
``` 
http://localhost:8081/ 
```

## USUARIO ADMINISTRADOR:

    User: 
    Pass: 1234


## Material base:
Puede encontrar material de de acceso y consulta de la aplicación en: ``` entrega > assets ```
- Carpeta ``` bd-json ``` : archivos .json iniciales para la base de datos de: 👩‍🚀 usuarios, 🧳 productos, 🛒 carritos *(estan relacionados con los usuarios, cada usuario tiene su propio carrito)*.
- Carpeta ```img```: imágenes por defecto usadas para los productos y los usuarios.
- Carpeta ```postaman```: exportación de las llamadas a la base de datos mediante [postman](https://www.postman.com/).
- Carpeta ```mongo```: exportación de la base de datos de mongo usada.

## Secciones:

\- Home ``` / ```
\- Login ``` /session-login ```
\- Registro ``` /session-register ```
\- Productos ```/products```
\- Herramientas Administrador ```/products```
\--- Administrar usuarios  ```/user-all```
\----- Ver perfil usuario  ```/user-info/_id```
\--- Añadir productos  ```/product-create```
\--- Administrar productos  ```/product-all```
\--- Apidocs  ```/ ```
\--- Graphql  ```/ ```
\--- Ver todas los carritos activos  ```/cart-all```
\- Ver carrito usuario logueado ```/user-cart```
\- Ver perfil usuario logueado ```/user-perfil```
\- Desloguearse ```/session-logout```

### Endpoints:
1. ```/``` : vistas
    1. GET ``` /session-login ```
    2. GET ``` /session-register ```
    3. GET ```/products```
    4. GET ```/products```
    5. GET ```/user-all```
    6. GET ```/user-info/_id```
    7. GET ```/product-create```
    8. GET ```/product-all```
    9. GET ```/apidocs ```
    10. GET ```/graphql ```
    11. GET ```/cart-all```
    12. GET ```/user-cart```
    13. GET ```/user-perfil```
    14. GET ```/session-logout```
2. ```/api/user``` : usuarios
    1. GET ```/``` : getAll
    2. GET ```/byId/:_id``` : getBy ID MONGO
    3. GET ```/byEmail/:email'``` : getBy ID EMAIL
    4. POST ```/save``` : save
    5. PUT ```/update/byId/:_id``` : updateBy ID MONGO
    6. PUT ```/update/byEmail/:email``` : updateBy ID EMAIL
    7. DELETE ```/delete/byId/:_id'``` : deleteBy ID MONGO
    8. DELETE ```/delete/byEmail/:email``` : deleteBy ID EMAIL
    9. GET ```/Info/ById/:_id'``` : userInfoBy ID MONGO
3. ```/api/session/``` : sessión
    1. POST ```/register``` : register);
    2. POST ```/login``` : login);
4. ```/api/product``` : producto
    1. GET ```/api/product/``` : getAll
    2. GET ```/api/product/byId/``` :_id getBy ID MONGO
    3. POST ```/api/product/save``` : save
    4. PUT ```/api/product/update/byId/:_id``` : updateBy ID MONGO
    5. DELETE ```/api/product/delete/byId/:_id``` : deleteBy ID MOGNO
5. ```/api/cart``` : carrito
    1. GET ```/api/cart/``` : getAll
    2. GET ```/api/cart/byId/:_id``` : getBy ID MONGO
    3. POST ```/api/cart/update``` : updateById ID MONGO
    4. GET ```/api/cart/Info/ById/:_id``` : cartInfoBy ID MONGO










