Entrega del curso de BACKEND CoderHouse:
# Creación de Cookies:


## Server
http://localhost:8080

## End point:
    ### Pantalla de registro:
    http://localhost:8080/
    ### Pantalla de visualización de productos con usuario registrado:
    http://localhost:8080/products

    ## Creación de cookie en mongo:
    http://localhost:8080/api/cookies/visita
    (Si se refresca se verá la cantidad de visitas realizadas)

    ## Saber si esta logueado:
    http://localhost:8080/api/cookies/current

## Extensiones usadas:
"dependencies": {
    "bcrypt": "^5.0.1",
    "connect-mongo": "^4.6.0",
    "cookies-parser": "^1.2.0",
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "faker": "^5.5.3",
    "mongo": "^0.1.0",
    "mongoose": "^6.6.0",
    "nodemon": "^2.0.19",
  }