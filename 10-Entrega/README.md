# SEGUNDA ENTREGA DE PROYECTO BACKEND
## Conexión con DAO
Para la modificación de la conexión con la diferentes persitencias, cambiar la variable persistencia (comentar y descomentar), la variable "persistencia", en el archivo _PERSISTENCE.js, que se encuentra en la raiz.

```javascript

let persistence = 'MEMORY';
//let persistence = 'FILE';
//let persistence = 'MONGO';

```

## Carpeta:
    Dos tipos de formatos para probar las persistencias: el formato común y mediante dao:
    
    ## DAO:  

    * src > dao > MemoryDAO
    * src > dao > FileDAO
    * src > dao > MongoDAO


    ## Indepoendientes

    * src > OnlyMemory
    * src > OnlyFile
    * src > OnlyMongo

    para poder cambiar la persistencia en este formato es necesario descomentar las importaciones correspondientes en el aerchivo serve.js 
    src > server.js
