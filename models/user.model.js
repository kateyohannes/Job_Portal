"use strict"

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    tel: [{
        number: { type: String },
        is_verfied: { type: Boolean, default: false },
        is_primary: { type: Boolean, default: false }
    }],
    profile: {
        fullname: {
            firstname: { type: String },
            middlename: { type: String },
            lastname: { type: String }
        },
        profile_img: { type: String },
        sex: { type: String },
        bod: { type: String },
        address: {
            kebele: { type: String },
            wereda: { type: String },
            zon: { type: String }
        },

        email: { 
            address : { type: String },
            is_verfied: { type: Boolean }
        },
        links: [{ 
            lable: { type: String },
            url: { type: String } 
        }],
    }
},{
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)

