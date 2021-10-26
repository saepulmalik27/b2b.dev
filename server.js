// Libraries
require('dotenv').config()
const { createServer } = require('http')
const { URL } = require('url')
const next = require('next')

const PORT = process.env.PORT
const ENVIRONMENT = process.env.ENVIRONMENT

if (!PORT) {
    throw new Error('PORT is undefined')
}

if (!ENVIRONMENT) {
    throw new Error('ENVIRONMENT is undefined')
}

const dev = ENVIRONMENT !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = new URL(req.url)

        handle(req, res, parsedUrl)
    }).listen(PORT, error => {
        if (error) {
            throw error
        }

        console.log(`Server listening on the port::${PORT}`)
    })
})
