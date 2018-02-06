"use strict";

const {Client} = require('pg'),
    defaultOptionsForDrop = {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        pass: null,
        port: 5432,
        name: null,
    },
    defaultOptionsForCreate = Object.assign(defaultOptionsForDrop, {
        owner: null,
        encoding: 'UTF-8'
    });

module.exports = {

    create: (options = defaultOptionsForCreate) => {
        options = Object.assign(defaultOptionsForCreate, options);
        const client = new Client({
            user: options.user,
            host: options.host,
            database: options.database,
            password: options.pass,
            port: options.port,
        });
        client.connect();
        return client.query(`select count(*) from pg_catalog.pg_database where datname = '${options.name}'`)
            .then(result => {
                if (result.rows[0].count === '0') {
                    let query = `CREATE DATABASE "${options.name}"
                ${options.owner ? `WITH OWNER = '${options.owner}'` : ''}
                ENCODING = '${options.encoding}' `;
                    return client.query(query);
                }
            })
            .catch(error => {
                client.end();
                throw error;
            })
            .then(() => client.end());
    },

    drop: (options = defaultOptionsForDrop) => {
        options = Object.assign(defaultOptionsForDrop, options);
        const client = new Client({
            user: options.user,
            host: options.host,
            database: options.database,
            password: options.pass,
            port: options.port,
        });
        client.connect();
        return client.query(`DROP DATABASE IF EXISTS "${options.name}"`)
            .catch(error => {
                client.end();
                throw error;
            })
            .then(() => client.end());
    }
};
