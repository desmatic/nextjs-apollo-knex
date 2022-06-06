import { SQLDataSource } from 'datasource-sql'

export const MyDBConfig = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'desjones',
        password: 'foobar123',
        database: 'des'
    }
}

export const CACHETTL = 60;

class MyDB extends SQLDataSource {
    getMessages() {
        return this.knex
            .raw(`select 1 as id, 'hello world!!!' as message`)
    }
}

export default MyDB
