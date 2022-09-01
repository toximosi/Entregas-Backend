

## Material extra
Se puede encontrar en la carpeta files-entrega.

+ Firebase:
    - Clave privada: entrega-backend-coderhoused-firebase-adminsdk-mw9bj-25eeb6c4a9.json.






## FIRABASE
link: https://console.firebase.google.com/u/0/

*identificador único: * Entrega-Backend-coderHoused


configuración de proyecto:
Node.js
```javascript
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```
