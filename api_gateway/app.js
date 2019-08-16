const express = require('express')
const morgan = require('morgan')
const httpProxy = require('express-http-proxy')
const axios = require('axios')

const app = express()
const proxyService = httpProxy('http://service:3002')
const api = axios.create({ baseURL: 'http://auth:3001' })

const PORT = process.env.PORT || 80
const HOST = process.env.HOST || 'localhost'

app.use(morgan('dev'))

const auth = async (req, res, next) => {
  try {
    const config = { headers: { token: req.headers.token } }
    await api.get('/', config)
    next()
  } catch (e) {
    console.log(e)
    res.status(401).json({ msg: e.message })
  }
}

app.get('/', auth, proxyService)

app.listen(PORT, () => console.log(`API online: http://${HOST}:${PORT}`))
