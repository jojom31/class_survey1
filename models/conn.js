'use strict';

const host = 'localhost',
    database = 'topics'

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY:', event.query);
    }
})

const options = {
    host,
    datatbase
}

const db = pgp(options);

module.exports = db;
