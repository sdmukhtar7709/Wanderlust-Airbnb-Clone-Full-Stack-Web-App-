const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: String,
    image: {
        url: String,
        filename: String    
    },

    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner:{
            type:Schema.Types.ObjectId,
            ref: "User"
        }
    ,
    category: {
        type: String,
        enum: ['homes','experiences','services','beach','mountains','villas','cabins','city','luxury','unique'],
        default: 'homes'
    }

});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
