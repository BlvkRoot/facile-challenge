module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false},
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