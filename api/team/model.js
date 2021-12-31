const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    "name": { type: String, required: true },
    "position": { type: String, required: true },
    "image_url": { type: String, required: true },
    "social_profiles":{
        "gdsc":{ type: String, required: true },
        "linkedIn":{ type: String, required: true },
        "gitHub":{ type: String, required: true },
        "facebook":{ type: String, required: true },
        "instagram":{ type: String, required: true },
    }
});

module.exports = mongoose.model("members", memberSchema);

