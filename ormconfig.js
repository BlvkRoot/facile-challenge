const { resolve } = require('path');

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false},
    "synchronize": false,
    "logging": false,
    "entities": [
       "dist/entities/**/{*.ts,*.js}"
    ],
    "migrations": [
       "dist/database/migration/**/{*.ts,*.js}"
    ],
    "subscribers": [
       "dist/subscriber/**/{*.ts,*.js}"
    ],
    "cli": {
       "entitiesDir": "dist/entities",
       "migrationsDir": "dist/database/migration",
       "subscribersDir": "dist/subscriber"
    }
 } 