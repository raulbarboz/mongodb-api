const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    tag:{ 
        type: String, 
        required: true,
        unique: false,
        trim: true
    },
},{
    timestamps: true,
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;