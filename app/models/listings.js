var mongoose = require('mongoose');

// define the schema for our user model
var listingSchema = mongoose.Schema({

    local            : {
        user           : String,
        Address        : String,
        Description    : String,
        pricePerNight  : String,
    },

});

// methods ======================
// generating a hash

// checking if password is valid


// create the model for users and expose it to our app
module.exports = mongoose.model('listing', listingSchema);
