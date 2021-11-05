const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
    name: {
        type: String,
        default: 'PersonName',
        required: false,
    },
    surname: {
        type: String,
        default: 'PersonSurName',
        required: false,
    },
    identityNumber: {
        type: String,
        required: true,
        unique: true,
    },
    hobies: [{ hobbyName: String, dailyFrequency: Number }],
});

module.exports = mongoose.model('person', PersonSchema);