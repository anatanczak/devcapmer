const express = require('express')
const dotenv = require('dotenv')

//load env file
dotenv.config({ path: './config/config.env'})

//create an instance of express
const app = express()

// access a variable in ENV file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))