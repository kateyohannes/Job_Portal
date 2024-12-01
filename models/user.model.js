"use strict"

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { 
        salt: {type: String },
        current_password: { type: String }
    },
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

        email: { type: String },
        tel: {
            code : { type: String },
            number: { type: String },
            is_verfied: { type: Boolean, default: false },
        },
        links: [{ 
            lable: { type: String },
            url: { type: String } 
        }],
    },
    file: {
        cv: { type: String },
        resume: { type: String },
    }
},{
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)

