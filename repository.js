//crud işlemlerini yapabilen postresql e bağlanabilen bir katman olacak

const { Client } = require('pg')

export default class Repository {
    async read(query) {
        const client = new Client()
        client.connect()

        const res = await client.query(query)
        await client.end()

        return res.rows;
    }
}

