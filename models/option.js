const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    question_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    id:{
        type:Number,
        require:true
    },
    text: {
        type: String,
        required: true
    },
    
    // include the array of ids of all comments in this post schema itself
    votes: 
        {
            type:  Number,
            required:true
        }
    ,
    link_to_vote:{
        type:String,
        require:true
    }

},{
    timestamps: true
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;