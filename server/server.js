const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var knex = require('knex')

const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'rshutj967',
      database : 'test'
    }
});

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post ('/contact', (req, res) => {
    const { name, email, message} = req.body
    database('Messages').insert({
        Name: name,
        email: email,
        message: message
    }) 
    .then(res.send('success'))
    .catch(err => res.status(400).send('failure'))
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})