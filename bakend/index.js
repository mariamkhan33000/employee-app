import express from 'express'
import connectedDb from './config/db.js'
import bodyParser from 'body-parser'
import employeeRoute from './routes/employeeRoute.js'
import dotenv from 'dotenv'
const app = express()

dotenv.config()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/employees', employeeRoute)

app.listen(PORT, () => {
    console.log(`The Port is running on ${PORT}`)
    connectedDb()
})