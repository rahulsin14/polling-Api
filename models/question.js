const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    
    // include the array of ids of all comments in this post schema itself
    options: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
},{
    timestamps: true
});
// questionSchema.index({ "id": 1 }, { unique: true });
const Question = mongoose.model('Question', questionSchema);
module.exports = Question;