const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'MeanStackDB'
}, (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded.');
    } else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');