import { SQLDataSource } from 'datasource-sql'

export const myDBConfig = {
    client: 'mysql2',
    connection: {
        host     : process.env.DB_HOST     || '127.0.0.1',
        port     : process.env.DB_PORT     || 3306,
        database : process.env.DB_DATABASE || 'test',
        user     : process.env.DB_USERNAME || 'root',
        password : process.env.DB_PASSWORD || '',
    }
}

export const CACHETTL = 60

class MyDB extends SQLDataSource {
    getMessages() {
        return this.knex
            .raw(`select 1 as id, 'hello world!!!' as message`)
    }
}

export default MyDB
