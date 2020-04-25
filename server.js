const express = require('express')
const dotenv = require('dotenv')
//get access to the routes
const bootcamps = require('./routes/bootcamps')
// require connection to the db
const connectDB = require('./config/db')
//third party logging middleware
const morgan = require('morgan')

//to highlight the console.logs in the console:
const colors = require('colors')

//load env file
dotenv.config({ path: './config/config.env'})

// call the connection
connectDB()

//create an instance of express
const app = express()
//to parse json
app.use(express.json())

// access a variable in ENV file
const PORT = process.env.PORT || 5000

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'))
}
app.use(bootcamps)

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

process.on('unhandledRejection', (err, promise) => {
console.log(`Error: ${err.message}`.red)
// close server & exit process - 1 is for failure
server.close(() => process.exit(1))
})