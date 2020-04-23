/**
 * USse require to loaad an external library: 
 */
const express = require('express')

/**
 * Initialize express app
 */
const app = express()

/**
 * App listens on port 3000
 * Define whichh port it listens at
 */
const port = 3000

/**
 * Create an API route.
 * Respond to a get request with 'Hello world'
 */
app.get('/', (req, res) => res.send('Hello World!'))

/**
 * Initize server to listen for requests
 */
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))