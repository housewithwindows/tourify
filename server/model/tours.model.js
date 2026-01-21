const mongoose  = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [5, 'Title must be at least 5 letters'],
        maxLength: [20, 'Title must be at most 20 letters'],
        required: [true, 'Entering a title is necessary']
    },
    duration: {
        type: String,
        required: [true, 'Entering duration is required']
    },
    description: {
        type: String,
        minLength: [8, 'Description must be at least 8 letters'],
        maxLength: [20, 'Description must be at most 20 letters'],
        required: [true, 'Entering a description is necessary']
    },
    price: {
        type: String,
        required: [true, 'Entering a price is required']
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
}, { timestamps: true });

const Tour = mongoose.model('Tours', tourSchema);

module.exports = Tour;
