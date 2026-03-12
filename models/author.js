const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    personalCode: { required: true, type: String },
    contactData: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContactData'
    }
})

module.exports = mongoose.model('Author', authorSchema);