module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false},
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entities/**/{*.ts,*.js}"
    ],
    "migrations": [
       "src/database/migration/**/{*.ts,*.js}"
    ],
    "subscribers": [
       "src/subscriber/**/{*.ts,*.js}"
    ],
    "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/database/migration",
       "subscribersDir": "src/subscriber"
    }
 } 