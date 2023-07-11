const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    neededTravelItems: {
        type: [String],
        required: true
    },
    travelAdvisories: {
        type: [String],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Country', countrySchema)