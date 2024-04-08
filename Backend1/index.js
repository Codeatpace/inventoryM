const express = require('express');
const mongoDB = require('./db');
const cors = require('cors')
const app = express()

app.use(cors())

const port = 5000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.send("Hello WORLD")
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    
    next();
  })
mongoDB

app.use('/api', require('./Routes/login'))
app.use('/api', require('./Routes/addItem'))
app.use('/api', require('./Routes/getItem'))
app.use('/api', require('./Routes/deleteItem'))
app.use('/api', require('./Routes/editItem'))

app.listen(port, () => {
    console.log(`Backend started at port ${port}`);
})