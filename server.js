const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Hooking up the index router
const indexRouter = require('./routes/index')

// View engine.
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')  // Where our views files are going to be.

// Layouts
app.set('layout', 'layouts/layout')     // Where our layout files are going to be 
app.use(expressLayouts)
app.use(express.static('public'))       // Where our public files are going to be (stylesheets, js).

// Using the index router
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)