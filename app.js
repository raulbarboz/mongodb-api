const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database connection established successfully");
})

const TAG = require('./routes/tags');

app.use('/tags', TAG);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})