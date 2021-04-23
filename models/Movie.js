const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    
        movieName:{
            type: String,
            required: true
        },
        contentType: {
            type:String,
            required: true
        },
        imageBase64 : {
            type: String,
            required:true
        },
        description: {
            type: String,
            required:true
        },    
        genre: {
            type: String,
            required:true
        },    
        rating: {
            type: String,
            required:true
        },                    
        date:{ 
            type: Date,
            default: Date.now
        }

})
module.exports = Movie = mongoose.model('movie', movieSchema);
//