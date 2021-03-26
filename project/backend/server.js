const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cookieParser = require('cookie-parser');

const PORT  = process.env.PORT || 3001;

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_ACCESS, {useNewUrlParser:true, useUnifiedTopology: true}, () => console.log("Database connected"))

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      `http://localhost:3000`
    );
    res.header('Content-Type', 'application/json;charset=UTF-8');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.use('/', routesUrls);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../build'))
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}
app.listen(PORT, () => console.log("Server is running on localhost:3001."));