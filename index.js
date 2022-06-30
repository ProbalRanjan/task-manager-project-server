const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Task Manager is detected')
})

app.listen(port, () => {
    console.log(`Task Manager is running on ${port}`)
})