const express = require('express')
const app = express()
const mysql = require('mysql2')
const fs = require('fs')
console.log('aki')
const port = process.env.PORT 
const connection = mysql.createConnection({
  host: 'mysql669.umbler.com',
  user: 'sokanellas',
  database: 'teste01bgta',
  password: 'Sokanellas2',
  multipleStatements: true
})
// mysql://b4a233a820586a:94c84c05@us-cdbr-iron-east-02.cleardb.net/heroku_7b047b086f614a8?reconnect=true
// console.log(process.env.CLEARDB_DATABASE_URL)
// const connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)

connection.connect(err => {
  console.log('aki')
  if (!err) {
    console.log('connected to db.')
  }
})

app.get('/', (req, res) => {
  res.send('Hello DevPleno!')
})

app.listen(port, err => {
  if (!err) {
    console.log('server listening on port', port)
  } else {
    console.log(err)
  }
})
