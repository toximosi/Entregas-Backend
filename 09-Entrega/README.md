# Start Mongo
```
mongosh
```
---

# Create BD
crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.
* crear una base de datos llamada ecommerce
```javascript
test> use ecommerce
switched to db ecommerce
ecommerce>
```
* crear colecciones: mensajes y productos.

```javascript
ecommerce> db.createCollection("mensajes")
{ ok: 1 }
ecommerce> db.createCollection("productos")
{ ok: 1 }
```
---


# 1. Agregar ... 
... 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 
# & 2. Definir las claves ...
... de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 

* file: messages.json
* file: productos.json

### mensajes
```javascript
ecommerce> db.mensajes.insertMany([{ "id": 1, "user": "User 01", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 01" }, { "id": 2, "user": "User 02", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 02" }, { "id": 3, "user": "User 03", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 03" }, { "id": 4, "user": "User 04", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 04" }, { "id": 5, "user": "User 05", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 05" }, { "id": 6, "user": "User 06", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 06" }, { "id": 7, "user": "User 07", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 07" }, { "id": 8, "user": "User 08", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 08" }, { "id": 9, "user": "User 09", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 09" }, { "id": 10, "user": "User 10", "date": "2022-08-07T13:51:13.591Z", "text": "texto chat user 10" }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63039d5c2e3fe0f9a141fdb6"),
    '1': ObjectId("63039d5c2e3fe0f9a141fdb7"),
    '2': ObjectId("63039d5c2e3fe0f9a141fdb8"),
    '3': ObjectId("63039d5c2e3fe0f9a141fdb9"),
    '4': ObjectId("63039d5c2e3fe0f9a141fdba"),
    '5': ObjectId("63039d5c2e3fe0f9a141fdbb"),
    '6': ObjectId("63039d5c2e3fe0f9a141fdbc"),
    '7': ObjectId("63039d5c2e3fe0f9a141fdbd"),
    '8': ObjectId("63039d5c2e3fe0f9a141fdbe"),
    '9': ObjectId("63039d5c2e3fe0f9a141fdbf")
  }
}
```

### productos
```javascript
ecommerce> db.productos.insertMany([{	"id": 1, "timestamp": "producto 1", "name": "nombre 1", "description": "descripcion 1", "code": "código 1", "image": "image-01.jpg", "price": 120, "stock": 2},{ "id": 2,"timestamp": "producto 2", "name": "nombre 2", "description": "descripcion 2", "code": "código 2", "image": "image-02.jpg", "price": 580, "stock": 2},{ "id": 3, "timestamp": "producto 3", "name": "nombre 3", "description": "descripcion 3", "code": "código 3", "image": "image-03.jpg", "price": 900, "stock": 3},{ "id": 4, "timestamp": 1660524176521, "name": "nombre 4", "description": "descripcion 4", "code": "código 4", "image": "image-04.jpg", "price": 1280, "stock": 4},{ "id": 5, "timestamp": 1660524176521, "name": "nombre 5", "description": "descripcion 5", "code": "código 5", "image": "image-05.jpg", "price": 1700, "stock": 5},{ "id": 6, "timestamp": 1660524176521, "name": "nombre 6", "description": "descripcion 6", "code": "código 6", "image": "image-06.jpg", "price": 2300, "stock": 6},{ "id": 7, "timestamp": 1660524176521, "name": "nombre 7", "description": "descripcion 7", "code": "código 7", "image": "image-07.jpg", "price": 2860, "stock": 7},{ "id": 8, "timestamp": 1660524176521, "name": "nombre 8", "description": "descripcion 8", "code": "código 8", "image": "image-08.jpg", "price": 3350, "stock": 8},{ "id": 9, "timestamp": 1660524176521, "name": "nombre 9", "description": "descripcion 9", "code": "código 9", "price": 4990,":"stock": 10}pg", "price": 4320, "stock": 9},{ "id": 10, "timestamp": 1660524176521, "name": "nombre 10", "description": "descripcion 10", "code": "código 10", "image": "image-10.jpg",
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63039c682e3fe0f9a141fdac"),
    '1': ObjectId("63039c682e3fe0f9a141fdad"),
    '2': ObjectId("63039c682e3fe0f9a141fdae"),
    '3': ObjectId("63039c682e3fe0f9a141fdaf"),
    '4': ObjectId("63039c682e3fe0f9a141fdb0"),
    '5': ObjectId("63039c682e3fe0f9a141fdb1"),
    '6': ObjectId("63039c682e3fe0f9a141fdb2"),
    '7': ObjectId("63039c682e3fe0f9a141fdb3"),
    '8': ObjectId("63039c682e3fe0f9a141fdb4"),
    '9': ObjectId("63039c682e3fe0f9a141fdb5")
  }
}
```
---

# 3. Listar ...
... todos los documentos en cada colección.

### productos
``` javascript
ecommerce> db.productos.find();
[
  {
    _id: ObjectId("63039c682e3fe0f9a141fdac"),
    id: 1,
    timestamp: 'producto 1',
    name: 'nombre 1',
    description: 'descripcion 1',
    code: 'código 1',
    image: 'image-01.jpg',
    price: 120,
    stock: 2
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdad"),
    id: 2,
    timestamp: 'producto 2',
    name: 'nombre 2',
    description: 'descripcion 2',
    code: 'código 2',
    image: 'image-02.jpg',
    price: 580,
    stock: 2
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdae"),
    id: 3,
    timestamp: 'producto 3',
    name: 'nombre 3',
    description: 'descripcion 3',
    code: 'código 3',
    image: 'image-03.jpg',
    price: 900,
    stock: 3
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdaf"),
    id: 4,
    timestamp: 1660524176521,
    name: 'nombre 4',
    description: 'descripcion 4',
    code: 'código 4',
    image: 'image-04.jpg',
    price: 1280,
    stock: 4
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb0"),
    id: 5,
    timestamp: 1660524176521,
    name: 'nombre 5',
    description: 'descripcion 5',
    code: 'código 5',
    image: 'image-05.jpg',
    price: 1700,
    stock: 5
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb1"),
    id: 6,
    timestamp: 1660524176521,
    name: 'nombre 6',
    description: 'descripcion 6',
    code: 'código 6',
    image: 'image-06.jpg',
    price: 2300,
    stock: 6
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb2"),
    id: 7,
    timestamp: 1660524176521,
    name: 'nombre 7',
    description: 'descripcion 7',
    code: 'código 7',
    image: 'image-07.jpg',
    price: 2860,
    stock: 7
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb3"),
    id: 8,
    timestamp: 1660524176521,
    name: 'nombre 8',
    description: 'descripcion 8',
    code: 'código 8',
    image: 'image-08.jpg',
    price: 3350,
    stock: 8
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb4"),
    id: 9,
    timestamp: 1660524176521,
    name: 'nombre 9',
    description: 'descripcion 9',
    code: 'código 9',
    image: 'image-09.jpg',
    price: 4320,
    stock: 9
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb5"),
    id: 10,
    timestamp: 1660524176521,
    name: 'nombre 10',
    description: 'descripcion 10',
    code: 'código 10',
    image: 'image-10.jpg',
    price: 4990,
    stock: 10
  }
]
```
---

### mensajes
```javascript
ecommerce> db.mensajes.find()
[
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdb6"),
    id: 1,
    user: 'User 01',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 01'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdb7"),
    id: 2,
    user: 'User 02',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 02'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdb8"),
    id: 3,
    user: 'User 03',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 03'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdb9"),
    id: 4,
    user: 'User 04',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 04'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdba"),
    id: 5,
    user: 'User 05',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 05'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdbb"),
    id: 6,
    user: 'User 06',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 06'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdbc"),
    id: 7,
    user: 'User 07',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 07'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdbd"),
    id: 8,
    user: 'User 08',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 08'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdbe"),
    id: 9,
    user: 'User 09',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 09'
  },
  {
    _id: ObjectId("63039d5c2e3fe0f9a141fdbf"),
    id: 10,
    user: 'User 10',
    date: '2022-08-07T13:51:13.591Z',
    text: 'texto chat user 10'
  }
]
```
---

# 4. Mostrar ...
... la cantidad de documentos almacenados en cada una de ellas.

### productos
```javascript
ecommerce> db.productos.estimatedDocumentCount()
10
```

### mensajes
```javascript
ecommerce> db.mensajes.estimatedDocumentCount()
10
```
---

# 5. Realizar un CRUD ...
... sobre la colección de productos:

## 5.1. Agregar un producto ...
... más en la colección de productos
```javascript
ecommerce> db.productos.insertOne({"id": 11, "timestamp": 1660524176521, "name": "nombre 11", "description": "descripcion 11", "code": "código 11", "image": "image-11.jpg", "price": 4990, "stock": 11})
{
  acknowledged: true,
  insertedId: ObjectId("6303d8ef2e3fe0f9a141fdc0")
}
ecommerce> db.productos.find({"id" : 11})
[
  {
    _id: ObjectId("6303d8ef2e3fe0f9a141fdc0"),
    id: 11,
    timestamp: 1660524176521,
    name: 'nombre 11',
    description: 'descripcion 11',
    code: 'código 11',
    image: 'image-11.jpg',
    price: 4990,
    stock: 11
  }
]
```

## 5.2. Realizar una consulta ...
... por nombre de producto específico:

```javascript
ecommerce> db.productos.find({"name": "nombre 9"})
[
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb4"),
    id: 9,
    timestamp: 1660524176521,
    name: 'nombre 9',
    description: 'descripcion 9',
    code: 'código 9',
    image: 'image-09.jpg',
    price: 4320,
    stock: 9
  }
]
```

## 5.2.1. Listar los productos ...
... con precio menor a 1000 pesos.

```javascript
ecommerce> db.productos.find({ "price": { $lt: 1000 }})
[
  {
    _id: ObjectId("63039c682e3fe0f9a141fdac"),
    id: 1,
    timestamp: 'producto 1',
    name: 'nombre 1',
    description: 'descripcion 1',
    code: 'código 1',
    image: 'image-01.jpg',
    price: 120,
    stock: 2
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdad"),
    id: 2,
    timestamp: 'producto 2',
    name: 'nombre 2',
    description: 'descripcion 2',
    code: 'código 2',
    image: 'image-02.jpg',
    price: 580,
    stock: 2
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdae"),
    id: 3,
    timestamp: 'producto 3',
    name: 'nombre 3',
    description: 'descripcion 3',
    code: 'código 3',
    image: 'image-03.jpg',
    price: 900,
    stock: 3
  }
]
```
## 5.2.2. Listar los productos ...
... con precio entre los 1000 a 3000 pesos.

```javascript
ecommerce> db.productos.find({$and:[{"price": {$lt:3000}}, {"price":{$gt:1000}}]})
[
  {
    _id: ObjectId("63039c682e3fe0f9a141fdaf"),
    id: 4,
    timestamp: 1660524176521,
    name: 'nombre 4',
    description: 'descripcion 4',
    code: 'código 4',
    image: 'image-04.jpg',
    price: 1280,
    stock: 4
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb0"),
    id: 5,
    timestamp: 1660524176521,
    name: 'nombre 5',
    description: 'descripcion 5',
    code: 'código 5',
    image: 'image-05.jpg',
    price: 1700,
    stock: 5
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb1"),
    id: 6,
    timestamp: 1660524176521,
    name: 'nombre 6',
    description: 'descripcion 6',
    code: 'código 6',
    image: 'image-06.jpg',
    price: 2300,
    stock: 6
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb2"),
    id: 7,
    timestamp: 1660524176521,
    name: 'nombre 7',
    description: 'descripcion 7',
    code: 'código 7',
    image: 'image-07.jpg',
    price: 2860,
    stock: 7
  }
]
```
## 5.2.3. Listar los productos ...
... con precio mayor a 3000 pesos.

```javascript
ecommerce> db.productos.find({ "price": { $gt: 3000 }})
[
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb3"),
    id: 8,
    timestamp: 1660524176521,
    name: 'nombre 8',
    description: 'descripcion 8',
    code: 'código 8',
    image: 'image-08.jpg',
    price: 3350,
    stock: 8
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb4"),
    id: 9,
    timestamp: 1660524176521,
    name: 'nombre 9',
    description: 'descripcion 9',
    code: 'código 9',
    image: 'image-09.jpg',
    price: 4320,
    stock: 9
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb5"),
    id: 10,
    timestamp: 1660524176521,
    name: 'nombre 10',
    description: 'descripcion 10',
    code: 'código 10',
    image: 'image-10.jpg',
    price: 4990,
    stock: 10
  },
  {
    _id: ObjectId("6303d8ef2e3fe0f9a141fdc0"),
    id: 11,
    timestamp: 1660524176521,
    name: 'nombre 11',
    description: 'descripcion 11',
    code: 'código 11',
    image: 'image-11.jpg',
    price: 4990,
    stock: 11
  }
]
```

## 5.2.4. Realizar una consulta ...
... que traiga sólo el nombre del tercer producto más barato.

```javascript
ecommerce> db.productos.find({},{"name":1}).limit(1).sort({"price":1}).skip(2)
[ { _id: ObjectId("63039c682e3fe0f9a141fdae"), name: 'nombre 3' } ]
```

## 5.3. Hacer una actualización ...
... sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.

```javascript
ecommerce> db.productos.updateMany({}, {$set: {"stock": 100}}, {upsert:true})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 11,
  modifiedCount: 11,
  upsertedCount: 0
}
ecommerce> db.productos.find({},{"stock":1})
[
  { _id: ObjectId("63039c682e3fe0f9a141fdac"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdad"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdae"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdaf"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb0"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb1"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb2"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb3"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb4"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb5"), stock: 100 },
  { _id: ObjectId("6303d8ef2e3fe0f9a141fdc0"), stock: 100 }
]
```

## 5.4. Cambiar el stock ...
... a cero de los productos con precios mayores a 4000 pesos. 

```javascript
ecommerce> db.productos.updateMany({"price":{$gt:4000}}, {$set: {"stock": 0}}, {upsert:true})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
ecommerce> db.productos.find({},{"stock":1})
[
  { _id: ObjectId("63039c682e3fe0f9a141fdac"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdad"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdae"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdaf"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb0"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb1"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb2"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb3"), stock: 100 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb4"), stock: 0 },
  { _id: ObjectId("63039c682e3fe0f9a141fdb5"), stock: 0 },
  { _id: ObjectId("6303d8ef2e3fe0f9a141fdc0"), stock: 0 }
]
```

## 5.5. Borrar los productos ...
... con precio menor a 1000 pesos 

```javascript
ecommerce> db.productos.deleteMany({"price":{$lt:1000}})
{ acknowledged: true, deletedCount: 3 }
ecommerce> db.productos.find()
[
  {
    _id: ObjectId("63039c682e3fe0f9a141fdaf"),
    id: 4,
    timestamp: 1660524176521,
    name: 'nombre 4',
    description: 'descripcion 4',
    code: 'código 4',
    image: 'image-04.jpg',
    price: 1280,
    stock: 100
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb0"),
    id: 5,
    timestamp: 1660524176521,
    name: 'nombre 5',
    description: 'descripcion 5',
    code: 'código 5',
    image: 'image-05.jpg',
    price: 1700,
    stock: 100
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb1"),
    id: 6,
    timestamp: 1660524176521,
    name: 'nombre 6',
    description: 'descripcion 6',
    code: 'código 6',
    image: 'image-06.jpg',
    price: 2300,
    stock: 100
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb2"),
    id: 7,
    timestamp: 1660524176521,
    name: 'nombre 7',
    description: 'descripcion 7',
    code: 'código 7',
    image: 'image-07.jpg',
    price: 2860,
    stock: 100
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb3"),
    id: 8,
    timestamp: 1660524176521,
    name: 'nombre 8',
    description: 'descripcion 8',
    code: 'código 8',
    image: 'image-08.jpg',
    price: 3350,
    stock: 100
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb4"),
    id: 9,
    timestamp: 1660524176521,
    name: 'nombre 9',
    description: 'descripcion 9',
    code: 'código 9',
    image: 'image-09.jpg',
    price: 4320,
    stock: 0
  },
  {
    _id: ObjectId("63039c682e3fe0f9a141fdb5"),
    id: 10,
    timestamp: 1660524176521,
    name: 'nombre 10',
    description: 'descripcion 10',
    code: 'código 10',
    image: 'image-10.jpg',
    price: 4990,
    stock: 0
  },
  {
    _id: ObjectId("6303d8ef2e3fe0f9a141fdc0"),
    id: 11,
    timestamp: 1660524176521,
    name: 'nombre 11',
    description: 'descripcion 11',
    code: 'código 11',
    image: 'image-11.jpg',
    price: 4990,
    stock: 0
  }
```
