const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config');

const mongoose = require('mongoose');

console.log('Server is starting...');
console.log('Connecting to database...');
mongoose.connect(config.dbUrl, {useNewUrlParser: true})
    .then(() => console.log('Connected'));
mongoose.connection = mongoose.connection.useDb('db');
const registrations = require('./routes/registrations').router;

app.use(bodyParser.json());
app.use(cors());
app.use('/registrations', registrations);
console.log(`Listening to port ${config.port}`);
app.listen(config.port);

process.once('SIGINT', () => {
    console.log('Closing connection...');
    mongoose.disconnect().then(() => {
        console.log('Closed');
        process.exit();
    });
});

process.once('SIGTERM', () => {
    console.log('Closing connection...');
    mongoose.disconnect().then(() => {
        console.log('Closed');
        process.exit();
    });
})

