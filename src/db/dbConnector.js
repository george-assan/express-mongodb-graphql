const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { footfallSchema } = require('./schema/footfallSchema.js');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Footfall = mongoose.model('Footfall', footfallSchema,'footfall');
Footfall.findOne().where({ Prop_1: '30427' }).exec((err, record) => {
    console.log(record)
});

export { Footfall };