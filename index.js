const express = require('express');
const { connectToDb } = require('./database')
const router = require('./routers')

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));
app.use(express.json());

app.use(router);

connectToDb();

const port = process.env.PORT || 5001;
app.listen(port, (req, res) => {
    console.log("app is listening on port " + port);
})