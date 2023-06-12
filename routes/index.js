const express = require('express')
const router = express.Router() // Get the Router variable from express.

router.get('/', (req, res) => {
    res.send('Hello world!')
})

module.exports = router     // To export the router variable to be used in the server.js file.