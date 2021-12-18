module.exports = {
    "type": "postgres",
    "host": process.env.POSTGRESQL_HOST,
    "port": Number(process.env.POSTGRESQL_PORT),
    "username": process.env.POSTGRESQL_USER,
    "password": process.env.POSTGRESQL_PASSWORD,
    "database": process.env.POSTGRESQL_DATABASE,
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entities/**/*.ts"
    ],
    "migrations": [
       "src/database/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/database/migration",
       "subscribersDir": "src/subscriber"
    }
 } 