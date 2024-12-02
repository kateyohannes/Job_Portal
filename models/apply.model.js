"use strict"

const mongoose = require("mongoose")

const applySchema = new mongoose.Schema({
    applicant: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    vacancy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vacancy",
        required: true
    },
    cover_letter: { type: String },
    protfolio: [{ type: String }],
    
    cv: { type: String },
    resume: { type: String },
    // rejected, accepted, onhold
    is_viewed: { type : Boolean, default: false },
    short_listed: { type: Boolean, default: false },
    is_rejected: { type: Boolean, default: false }
},{
    timestamps: true
})

module.exports = mongoose.model("apply", applySchema)
