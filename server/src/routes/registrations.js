const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
const mongoose = require('mongoose');
const Validator = require('validatorjs');

router.route('/').post(register);

async function register(req, res) {
    const valid = validateRegisterData(req.body);
    if(valid.fails()) {
        res.status(403).send(valid.errors);
    } else {
        try {
            const {firstName, lastName, email, eventDate} = req.body;
            const data = {
                _id: new mongoose.Types.ObjectId(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                eventDate: eventDate
            }
            await Registration.create(data);
            res.status(201).send(data);
        } catch (err) {
            res.status(500).send({error: err});
        }
    }
}

function validateRegisterData(data) {
    const rules = {
        firstName: 'required',
        lastName: 'required',
        email: 'required|email',
        eventDate: 'required|date'
    }
    let valid = new Validator(data, rules);
    return valid;
}

module.exports = {router, validateRegisterData};