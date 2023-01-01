# Proyecto final del curso Backend de Coderhouse
### *Por Iván Villarrubia.*
___



# DESCRIPCIÓN:




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
    "nodemon": "^2.0.19",
    "swagger-jsdoc": "^6.2.7",
    "swagger-ui-express": "^4.6.0"
  }
```



# ACCESO APLICACIÓN

#### Cagar de dependencias
```
npm install
```

#### Terminal:
``` 
> npm start
```

#### Navegador:
``` 
http://localhost:8081/ 
```

#### Usuario administrador:

```
    User: test@mail.es
    Pass: 1234
```

## MATERIAL BASE:
Puede encontrar material de de acceso y consulta de la aplicación en: ``` entrega > assets ```
- Carpeta ``` bd-json ``` : archivos .json iniciales para la base de datos de: 👩‍🚀 usuarios, 🧳 productos, 🛒 carritos *(estan relacionados con los usuarios, cada usuario tiene su propio carrito)*.
- Carpeta ```img```: imágenes por defecto usadas para los productos y los usuarios.
- Carpeta ```postaman```: exportación de las llamadas a la base de datos mediante [postman](https://www.postman.com/).
- Carpeta ```mongo```: exportación de la base de datos de mongo usada.

## ESTRUCTURA API

```
.
├⏤ assets 
⏐   ├⏤ bd-MONGO-json
⏐   ├⏤ img
⏐   ├⏤ json
⏐   ⌊⎽⎽ postman
⏐   
├⏤ src 
⏐   ├⏤ config
⏐   ├⏤ constants
⏐   ├⏤ controllers
⏐   ⏐  ⌊⎽⎽ models
⏐   ⏐
⏐   ├⏤ docs
⏐   ├⏤ dto
⏐   ├⏤ middlewares
⏐   ├⏤ public
⏐   ⏐  ├⏤ css
⏐   ⏐  ├⏤ html
⏐   ⏐  ├⏤ images
⏐   ⏐  ⌊⎽⎽ js
⏐   ⏐ 
⏐   ├⏤ routers
⏐   ├⏤ services
⏐   ├⏤ views
⏐   ├⏤ app.js
⏐   ⌊⎽⎽ utils.js
⏐   
├⏤ package.jsos 
⌊⎽⎽ README.md
```

## SECCIONES:

```
.
├⏤ Home ``` / ```
├⏤ Login ``` /session-login ```
├⏤ Registro ``` /session-register ```
├⏤ Productos ```/products```
├⏤ Herramientas Administrador ```/products```
⏐   ├⏤ Administrar usuarios  ```/user-all```
⏐   ⏐   ⌊⎽⎽ Ver perfil usuario  ```/user-info/_id```
⏐   ├⏤ Añadir productos  ```/product-create```
⏐   ├⏤ Administrar productos  ```/product-all```
⏐   ├⏤ Apidocs  ```/ ```
⏐   ├⏤ Graphql  ```/ ```
⏐   ├⏤ Ver todas los carritos activos  ```/cart-all```
├⏤ Ver carrito usuario logueado ```/user-cart```
├⏤ Ver perfil usuario logueado ```/user-perfil```
⌊⎽⎽ Desloguearse ```/session-logout```
```

## ACCESS APIDOCS:
```
http://localhost:8081/apidocs/
```
#### Endpoints:
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

    ---
## CONSIGNA:
## Curso Backend - MERN Stack: Proyecto Final
##E-commerce project

Desarrollarás el backend de una aplicación de e-commerce para poder vender productos de un rubro a elección.

### User story/brief: 

- [X]  Contendrá las rutas necesarias que permitan listar los productos existentes, ingresar productos nuevos, borrar y modificar sus detalles, así como interactuar con el carrito de compras.
- [X]  Se implementará una API RESTful con los verbos get, post, put y delete para cumplir con todas las acciones necesarias.
- [X]  Debe brindar al frontend un mecanismo de ingreso autorizado al sistema basado en JWT (Json Web Token). 
- [X]  Los productos ingresados se almacenarán en una base de datos MongoDB. 
- [X]  El usuario podrá registrar sus credenciales de acceso (email y password) para luego poder ingresar a su cuenta. Estas credenciales serán guardadas en la base de datos MongoDB encriptando la contraseña.
- [X]  El cliente tendrá una sesión activa de usuario con tiempo de expiración configurable.
- [X]  La arquitectura del servidor estará basada en capas (MVC)
- [X]  El servidor podrá tomar configuraciones desde un archivo externo.
- [X]  Dispondrá de una vista creada con handebars, que permita ver la configuración del servidor.
- [X]  Se enviará un mail a una casilla configurable, por cada registro nuevo de usuario y con cada orden de compra generada.
- [X]  En caso de detectar algún error, el servidor enviará una vista implementada con ejs, que contenga el id y el detalle completo
- [X]  Dos opciones para el frontend: desarrollo por parte del estudiante, ó se proporcionará uno para hacer las pruebas necesarias.
 

### Piezas sugeridas

**Te recomendamos incluir:**
- [X]  Node.js
- [X]  MongoDB
- [X]  Passport JWT
- [X]  Mongoose
- [X]  Bcrypt
- [X]  Websocket
- [X]  Dotenv
- [X]  Handlebars, Pug, Ejs
- [X]  Nodemailer |


### Requisitos base
**Los requisitos base serán parte de los criterios de evaluación para aprobar el proyecto.**
#### Inicio: Al momento de requerir la ruta base ‘/’
 - [X]  Permitir un menú de ingreso al sistema con email y password así como también la posibilidad de registro de un nuevo usuario.
 - [X]  El menú de registro consta del nombre completo del cliente, número telefónico, email y campo de password duplicado para verificar coincidencia.
 - [X]  Si un usuario se loguea exitosamente o está en sesión activa, la ruta ‘/’ hará una re dirección a la ruta del carrito /productos 
 - [X]  La ruta /productos devolverá el listado de todos los productos disponibles para la compra.
 - [X]  La ruta /productos/:categoria devolverá los productos por la categoría requerida.
 - [X]  Los ítems podrán ser agregados al carrito de compras y listados a través de la ruta /carrito.
 - [X]  Se podrán modificar y borrar por su id a través de la ruta /carrito:id.
 - [X]  Flow: Se puede solicitar un producto específico con la ruta /productos/:id, donde id es el id del item generado por MongoDB y devolver la descripción del producto ( foto, precio, selector de cantidad). 
 - [X]  Si se ingresa a /productos/:id y el producto no existe en MongoDB, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.

#### MongoDB:
Implementar al menos estas colecciones:
 ■	usuarios: clientes registrados
 ■	productos: catálogo completo
 - [X]  Link para foto (puede almacenarse de modo estático en la página en una subruta /images/:productoid )
 - [X]  Precio unitario
 - [X]  Descripción
 - [X]  Categoría

■	carrito: orden temporal de compra
 - [X]  Email
 - [X]  Fecha y hora
 - [X]  Items con sus cantidades
 - [X]  Dirección de entrega

------ no es necesario -----
------  -----
■	ordenes: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra. 
 - [X]  Ítems:  las órdenes deben poder tener productos surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
 - [X]  Número de orden: Se extrae de la cantidad de órdenes almacenadas
 - [X]  Fecha y hora
 - [X]  estado ( por defecto en ‘generada’)
 - [X]  Email de quién realizó la orden
------  -----


- [X]  Finalizada la orden, enviar un mail a la dirección de mi cuenta con los detalles de la orden.
- [X]  Se dispondrá de un archivo de configuración externo con opciones para desarrollo y otras para producción, que serán visualizadas a través de una vista construida con handlebars. Como parámetros de configuración estará el puerto de escucha del servidor, la url de la base de datos, el mail que recibirá notificaciones del backend, tiempo de expiración de sesión y los que sea necesario incluir.


### Requisitos Extra
**Los requisitos extra pro-coders no se incluyen en los criterios de evaluación.**
Los requisitos extra son funcionalidades opcionales que no se incluyen en los criterios de evaluación, pero si te falta diversión y quieres agregar valor a tu proyecto... ¡bajo la única condición de que lo que incluyas debe funcionar!

- [X]  auth/login: Implementar alguna de las estrategias de autenticación disponibles en passport para permitir el login con Facebook y Gmail
- []  Custom item: Posibilidad de agregar características seleccionables al producto (ej. talla, color, etc). La customización no debería modificar el precio. Las selecciones serán detalladas en el checkout. Por ejemplo: 1 x camisa (roja) $200 y 2 x camisa (verde) $400.
- []  Stock check: Validar stock al momento de intentar generar la orden.
- []  Mis órdenes: El usuario podrá visualizar todas las órdenes que realizó a través de la ruta /orden.

### Dont’s
**No es necesario ni recomendado.**
- [X]  Crear un administrador de stock, dado que puede escaparse del scope y requerir bastante trabajo extra. Podremos gestionar el stock desde la base MongoDB.
- [X]  Implementar el FrontEnd salvo que así sea deseado por parte del estudiante.