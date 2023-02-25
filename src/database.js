const pgp = require('pg-promise');
require('dotenv').config();

module.exports = pgp()(process.env.POSTGRES_CONNECTION);