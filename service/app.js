const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 80
const HOST = process.env.HOST || 'localhost'

app.use(morgan('dev'))

app.get('/', (_, res) => res.json({ online: true }))

app.listen(PORT, () => console.log(`Service online: http://${HOST}:${PORT}`))
