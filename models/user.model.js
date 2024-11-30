"use strict"

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { 
        salt: {type: String, required : true},
        current_password: { type: String, required: true }
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
        tel: [{
            code : { type: String },
            number: { type: String }
        }],
        email: { type: String },
        links: [{ 
            lable: { type: String },
            url: { type: String } 
        }],
    },
    file: {
        cv: { type: String, required: true },
        resume: { type: String },
    }
},{
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)

