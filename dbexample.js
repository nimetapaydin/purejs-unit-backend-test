const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT * from todos', (err, res) => {
  console.log(err ? err.stack : res.rows) // Hello World!
  client.end()
})