const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 80
const HOST = process.env.HOST || 'localhost'

app.use(morgan('dev'))

app.get('/', (req, res) => {
  req.headers.token === 'AAAATOKENAAAA' ? res.end() : res.status(401).end()
})

app.listen(PORT, () => console.log(`Auth online: http://${HOST}:${PORT}`))
