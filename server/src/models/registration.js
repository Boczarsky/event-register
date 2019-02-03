const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistationSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    eventDate: Date
});

module.exports = mongoose.model('Registration', RegistationSchema, 'registrations');