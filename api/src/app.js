const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');

/* const projectRoutes =require('./routes/projects')
const taskRoutes =require('./routes/tasks') */
const images= require('./routes/images')

const app = express()

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
const cors = require('cors')

/* middlewares */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())



app.use('/images', images)
/* app.use('/api/projects',projectRoutes)
app.use('/api/tasks',taskRoutes) */




module.exports = app