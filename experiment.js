"use strict";

const {create} = require('./index');

create({
    "user": "postgres",
    "pass": "spawn",
    "host": "localhost",
    "port": 5433,
})
    .catch(console.error);