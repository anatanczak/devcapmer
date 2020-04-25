const mongoose = require('mongoose')
const dotenv = require('dotenv')

//load env file
dotenv.config({ path: './config/config.env'})

const uri = process.env.MONGO_URI
// create a connection to the db
const connectDB = async() => {
const conn = await mongoose.connect(uri, {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
})
console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
}


module.exports = connectDB