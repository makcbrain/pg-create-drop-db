# pg-create-drop-db

Simple module for create if not exists or drop database.

## Install
``` bash
$ npm i pg-create-drop-db
```


## Usage

### create(options)

Creates a database if it does not exist.

``` js
const {create, drop}=require('pg-create-drop-db');

create({
    user: "postgres",
    pass: "postgres",
    host: "localhost",
    port: 5432,
    name: "db-name", //name for database
    database: "postgres" //the database through which the connection is made
})
.then(() => {
    //db created or exists
});
```

Option    | Description                                       | Default
-------   | ------------------------------------------------- | ---------
user      | Directory to put all default forever log files    | 'postgres'
pass      | Password       | null
host      | Host   | 'localhost'
port      | Port       | 5432
name      | The name of a database to create. |
database  | The database through which the connection is made     | 'postgres'
owner     | The role name of the user who will own the new database, or DEFAULT to use the default (namely, the user executing the command). To create a database owned by another role, you must be a direct or indirect member of that role, or be a superuser. |
encoding  |                                                   | 'UTF-8'

### drop(options)

Deletes the database.

``` js
const {create, drop}=require('pg-create-drop-db');

create({
    user: "postgres",
    pass: "postgres",
    host: "localhost",
    port: 5432,
    name: "db-name", //name for database
    database: "postgres" //the database through which the connection is made
})
.then(() => {
    //db dropped
});
```

Option    | Description                                       | Default
-------   | ------------------------------------------------- | ---------
user      | Directory to put all default forever log files    | 'postgres'
pass      | Password       | null
host      | Host   | 'localhost'
port      | Port       | 5432
name      | The name of a database to drop. |
database  | The database through which the connection is made     | 'postgres'