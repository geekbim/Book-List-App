const express = require('express')
const connectDB = require('./config/db')
var cors = require('cors')

// routes
const books = require('./routes/api/books')

const app = express()

// connect db
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'))

// use routes
app.use('/api/books', books)


const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))
