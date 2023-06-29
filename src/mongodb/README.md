# MongoDB

# Que es mongoDB
- Es una base de datos no relacional.
- Es un sistema de gestión de bases de datos (SGBD).
- MongoDB es una base de datos NoSQL orientado a documentos, hay [mas tipos](https://www.mongodb.com/databases/types).
- Bases de datos de documentos, es decir que los datos se guardan en documentos similares a JSON.
- Los documentos son la unidad básica de almacenamiento.
- Los documentos son estructuras de datos similares a JSON, que pueden tener cualquier forma, es decir que no tienen un esquema fijo como las tablas de las bases de datos relacionales.
- Los documentos se guardan en formato BSON, que es un formato binario similar a JSON.
- Base de datos distribuida, esto quiere decir que se puede ejecutar en un cluster de servidores, y los datos se distribuyen en los diferentes servidores del cluster.
- No tiene un esquema fijo, esto quiere decir que no tenemos que definir la estructura de los documentos antes de guardarlos, podemos guardar documentos con diferentes estructuras en la misma collection.
- [Intuitivo, facil y rapido para desarrolladores](https://www.mongodb.com/collateral/mongodb-architecture-guide)
  - Los documentos son similares a JSON, esto quiere decir que son faciles de leer y escribir. 
  - flexible: dinámicamente podemos agregar nuevos campos a los documentos.
  - Podemos guardar directamente nuestros JSON sin necesidad de descomponer en tablas, por ejemplo guardar responses de otros servicios.
  - [Podemos agregar unas reglas de validacion](https://www.mongodb.com/docs/manual/core/schema-validation/#when-to-use-schema-validation)
- MongoDB proporciona un conjunto completo de [opciones de indexación](https://www.mongodb.com/es/collateral/top-5-considerations-when-evaluating-nosql-databases) para optimizar una amplia variedad de consultas.
  - Indexación simple: consulta con un solo campo
  - Indexación compuesta: consulta con multiples campos
  - Indexación de texto: busca palabras en un campo de texto
  - Indexación geoespacial: calcula la distancia entre dos puntos geograficos
  - Indexación de arreglos: en campos typo arreglo, facilita la búsqueda y filtrado en un arreglo.
  - [MongoDB index](https://www.mongodb.com/scale/dynamic-schema-design) ![indexing](./images/index_types.jpg)
- Podemos integrar a nuestra application utilizando los [drivers](https://docs.mongodb.com/drivers/) de mongoDB

# Diferencia entre bases de datos relacionales y no relacionales
| Relacional                                                                              | No relacional                                                                 |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Algunos RDBMSs no pueden trabajar con data semi o no estructurada                       | Acepta data semi o no estructurada                                            |
| Utilizan SQL                                                                            | No utilizan SQL                                                               |
| Tienen un esquema fijo                                                                  | No tienen un esquema fijo                                                     |
| Insertar datos con esquema predefinido                                                  | Insertar datos sin un esquema predefinido                                     |
| Solo Escalables verticalmente: incrementar los recursos de un servidor                  | Escalables horizontalmente: aumentar los servidores(cluster de servidores) y Escalables verticalmente |
| mas info [aqui](https://www.mongodb.com/compare/relational-vs-non-relational-databases) |

- Podemos acceder, agrupar, transformar y analizar los datos de diferentes manera, utilizando [aggregation pipelines](https://www.mongodb.com/basics/aggregation-pipeline).
- Escuchar los cambios de los datos en tiempo real utilizando [change streams](https://www.mongodb.com/basics/change-streams).
- [Relational databases are monolithic systems, designed to run on a single server, typically with shared storage](https://www.mongodb.com/scale/dynamic-schema-design)
  - [Conceptos](https://www.mongodb.com/lp/white-paper/trail/migration-rdbms-nosql-mongodb)
    - ![](./images/diff_sql.jpg)

- [Schemas](https://www.mongodb.com/lp/white-paper/trail/migration-rdbms-nosql-mongodb)
     - Relational schema
  
       ![](./images/relation_schema.jpg)
     - Document schema
          ```json
          {
            first_name: 'Paul',
            surname: 'Miller',
            city: 'London',
            location: [45.123, 47.232],
            cars: [
              {
                model: 'Bentley',
                year: 1973,
                value: 100000
              },
              {
                model: 'Rolls Royce',
                year: 1965,
                value: 330000
              },
            ]
          }
                
          ```

# Conceptos clave de MonoDB
## Databases
Las bases de datos son similares a las bases de datos relacionales, pero no tienen un esquema fijo, es decir que pueden tener collections con diferentes estructuras.
## Collections
- Son similares a las tablas de las bases de datos relacionales, pero no tienen un esquema fijo, es decir que pueden tener documentos con diferentes estructuras.
Las collections son similares a las tablas de las bases de datos relacionales, pero no tienen un esquema fijo, es decir que pueden tener documentos con diferentes estructuras.

## Documentos
- Los documentos se guardan en collections.
- Los documentos son estructuras de datos similares a JSON, que pueden tener cualquier forma, es decir que [no tienen un esquema fijo](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/#flexible-schema).
- Tienen un Schema, que es un conjunto de reglas que definen la estructura de los documentos.
  - firstName: string
  - lastName: string
  - age: number
  - phones: array
  - address: object
  - educations: array of objects
- Los documentos se guardan en formato BSON, que es un formato binario similar a JSON.
## Campos
- Los campos son las propiedades de los documentos.
- Los campos tienen un nombre y un valor.
- El valor puede ser otro documento o un array de documentos.
- `educations:[{College: string, Degree: number},{}]`

![resume](images/db_collection_docs.jpg)
[tomado de ](https://learn.mongodb.com/learn/course/m320-mongodb-data-modeling/lesson-1-introduction-to-data-modeling/learn?page=4)

## Instalacion de mongoDB community edition

### Windows
[Descargar servicio mongoDB](https://www.mongodb.com/try/download/community) el instalador de la pagina oficial de mongoDB

## Clientes para MongoDB

- [MongoDB Compass](https://www.mongodb.com/products/compass) cliente grafico recomendado por mongoDB
- [Studio 3T](https://studio3t.com/download-studio3t-free) cliente grafico para mongoDB
- [MongoDB Shell](https://www.mongodb.com/try/download/shell) cliente de consola para mongoDB
  - luego de descargar tenemos que agregar el binario a las variables de entorno [Documentacion](https://docs.mongodb.com/mongodb-shell/)
  - utilizar el comando `mongosh` para iniciar el cliente de consola


# Conectarse a mongoDB

## MongoDB connection URI
![conectarse a mongoDB](./images/connection-string-parts.png)
mas info [aqui](https://www.mongodb.com/docs/manual/reference/connection-string/#std-label-connections-standard-connection-string-format)
### Ejemplos
- `mongodb://localhost:27017` a nuestro servidor local sin autenticacion
- `mongodb://myUserAdmin:hola@localhost:27017/` a nuestro servidor local con autenticacion
- `mongodb://myUserAdmin@localhost:27017/` para ingresar contraseña en el cliente

# Autenticacion
Por defecto mongodb tiene desactivada la autentificación, para activarla tenemos que editar el archivo de configuracion de mongoDB,
en windows el archivo se encuentra en `C:\Program Files\MongoDB\Server\{{version}}\bin\mongod.cfg` y en linux en `/etc/mongod.conf`.
Hay varias [formar de autentificarse](https://www.mongodb.com/docs/manual/tutorial/enable-authentication/) en mongoDB, hoy vamos a utilizar:
- [Autenticacion por SCRAM](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/)
- [mas info](https://www.mongodb.com/scale/nosql-database-security)
pero primero vamos a crear un usuario administrador.

## Pasos para activar la authentication
### 1. Crear usuario administrador
Conectarse a mongoDB con el cliente de consola
 
`use admin`
 
```
use admin
db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(), // ingresar la contraseña
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" }, // administrador de usuarios
      { role: "readWriteAnyDatabase", db: "admin" } // rol de lectura y escritura
     
    ]
  }
)
```
### 2. Activar autenticacion
Para activar la autenticacion tenemos que editar el archivo de configuracion de mongoDB,
en windows el archivo se encuentra en `C:\Program Files\MongoDB\Server\4.4\bin\mongod.cfg` y en linux en `/etc/mongod.conf`.
```
security:
    authorization: enabled
```
### 3. Reiniciar el servicio de mongoDB
En windows podemos reiniciar el servicio de mongoDB desde el administrador de servicios de windows, en linux podemos usar el comando `sudo systemctl restart mongod`
en la consola.
```js
db.adminCommand( { shutdown: 1 } )

```

### 4. Conectarse a mongoDB con autenticacion
- Usando URI 
`mongodb://myUserAdmin:hola@localhost:27017/` a nuestro servidor local con autenticacion
- Usando mongo shell
    ```js
    use admin
    db.auth("myUserAdmin", passwordPrompt()) 
    ```

Si intentamos hacer algo sin autenticacion nos va a dar un error
```
MongoServerError: command aggregate requires authentication
```
## Crear usuarios con roles 
Mongodb proporciona varios roles predefinidos, [mas info](https://docs.mongodb.com/manual/reference/built-in-roles/)

### Crear usuario con rol de lectura y escritura
```js
use admin
db.createUser(
    {
      user: "analystUser",
      pwd: passwordPrompt(),
      roles: [
        { role: "read", db: "sample_analytics" }, // readWrite
         
      ]
    }
)
```

# Operaciones CRUD
Vamos implementar una aplicacion de [recordatorios](https://www.behance.net/gallery/170936219/Reminder-App).
![conectarse a mongoDB](./images/reminderAppjpg.jpg)

Segun el diseño de la app vamos a tener un collection:
- tasks

Esta collection va a tener los siguientes campos:
- title
- description: opcional
- completed
- createdAt
- remindMe
- startAt
- color

Para implementar vamos a utilizar nodejs con typescript

### Schema de la collection
```ts
 export interface TaskEntity {
  name: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  remindMe: boolean;
  startAt: Date;
  color: {
    name: string;
    hex: string;
  };
}
```
[Schema de una aplicacion de artículos](https://www.mongodb.com/scale/database-schema-example)
### Info adicional
  - Vamos a utilizar el driver de mongodb para nodejs [mongodb](https://www.npmjs.com/package/mongodb)
  - [Typescript y Mongodb](https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/)  
  - En los ejemplos `collection` hace referencia a la collection `tasks` : `client.db("reminder_app").collection<TaskEntity>("tasks")`



### Crear
```ts
  public async save(taskEntity: TaskEntity) {
    const res = await  this.collection.insertOne(taskEntity)
    return res.insertedId.toHexString()
  }
  
  public async saveAll(taskEntities: TaskEntity[]) {
    const res =  await this.collection.insertMany(taskEntities, {ordered: false})
    // ordered false, si hay un error no se detiene la ejecucion
    return res.insertedIds
  }
  
```
### Buscar.
  Para actualizar, eliminar y buscar necesitamos buscar el documento que queremos modificar, eliminar o buscar.
Los metodos `updateOne`, `deleteOne` , `findOne`, etc. reciben un filter type Filter<TSchema> como parametro, este filter es un objeto que tiene la forma de un documento de mongoDB:

```ts
  /** A MongoDB filter can be some portion of the schema or a set of operators @public */
  export declare type Filter<TSchema> = {
    [P in keyof WithId<TSchema>]?: Condition<WithId<TSchema>[P]>; // dice que podermos buscar por cualquier campo del schema o el _id
  } & RootFilterOperators<WithId<TSchema>>; // podemos utilizar operadores como $and, $or, etc.

  export declare interface RootFilterOperators<TSchema> extends Document {
    $and?: Filter<TSchema>[];
    $nor?: Filter<TSchema>[];
    $or?: Filter<TSchema>[];
    $text?: {
      $search: string;
      $language?: string;
      $caseSensitive?: boolean;
      $diacriticSensitive?: boolean;
    };
    $where?: string | ((this: TSchema) => boolean);
    $comment?: string | Document;
  }    
  
```

```ts
  await this.collection.find({_id: ObjectId.createFromHexString(id)})
  await this.collection.find({name: 'descongelar el pollo'})
  await this.collection.find({name: {$regex: 'pollo'}})
  
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  await this.collection.find({startAt: {$gte: yesterday}})
```
```ts
  await this.collection.find({$and: [{name: {$regex: 'pollo'}},{description: {$exists: false}}]})
  await this.collection.find({$or: [{name: {$regex: 'pollo'}},{description: {$exists: false}}]})
  await this.collection.find({$or: [ {$and:[{name: {$regex: 'pollo'} }]},{description: {$exists: false}}]})
```
### Actualizar
```ts
  public async update(id: string, task: Partial<TaskEntity>) {
  const res = await this.collection.updateOne({_id: ObjectId.createFromHexString(id)}, {$set: task})
  const res = await this.collection.updateOne({$text:{$search:'test'}}, {$set: task})
  return res.modifiedCount
}
```
### Eliminar
```ts
  public async delete(id: string, task: TaskEntity) {
  const res = await this.collection.deleteOne({_id: ObjectId.createFromHexString(id)})
  return res.deletedCount
}
```

    
