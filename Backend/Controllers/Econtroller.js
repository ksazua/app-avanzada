const {request, response } = require('express');
const { db } = require('../firebase.js');



const nodemailer = require('nodemailer');
const configGmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'aaaaa@gmail.com',
        pass: 'vyqt dmnc xwqf rqey'
    }
});
const transporterEspe = nodemailer.createTransport({
    host: 'smtp.espe.edu.ec',
    port: 587,
    secure: true,
    auth: {
        user: 'aaaaaaaaa@gmail.com',
        pass: 'vyqt dmnc xwqf rqey'
    }
});
const transporterOutlook = nodemailer.createTransport({
    host: 'smtp.outlook.com',
    port: 587,
    secure: true,
    auth: {
        user: 'aaaaaa@gmail.com',
        pass: 'vyqt dmnc xwqf rqey'
    }
});