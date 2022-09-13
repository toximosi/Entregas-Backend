
# Aplicación de faker:
Se puede ver la creación de información random aplicada a los productos de la api en el end point:
../api/productos-test

La lógica se puede encontrar en los archivos:
````
⌙ src:
  ⌙ routers:
    ⌙ products.router.js
    ⌙ views.router.js
  ⌙ services: 
    ⌙ createElement.service.js
    ⌙ products.services.js
    ⌙ readFile.service.js
  ⌙ views:
    ⌙ products.handlebars.js
````

# Aplicación de Normalizer:
Se puede ver la normallización de la bd en endpoit:
../api/normalize



# dependecias:
"dependencies": {
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "faker": "^5.5.3",
    "mongo": "^0.1.0",
    "mongoose": "^6.6.0",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.19",
    "normalizr": "^3.6.2",
    "socket.io": "^4.5.2"
  }