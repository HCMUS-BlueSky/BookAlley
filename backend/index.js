require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/database')
const errorHandler = require('./middleware/errorHandler')
const authentication = require('./middleware/authentication');
const app = express()
const port = process.env.PORT || 5000

connectDB()
// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(cors())
// Error handler
app.use(errorHandler)
app.use(authentication)

const authAPI = require('./routes/api/auth');
const userAPI = require('./routes/api/user');
const bookAPI = require('./routes/api/book');
const { default: mongoose } = require('mongoose')
app.use('/api/auth', authAPI);
app.use('/api/user', userAPI);
app.use('/api/book', bookAPI);

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('json')) res.json({'error': '404 Not Found'})
  else res.type('text').send('404 Not Found')
})

mongoose.connection.once('open', () => {
  console.log("Connected to DB")
  app.listen(port, () => console.log(`Server started on port ${port}`));
})