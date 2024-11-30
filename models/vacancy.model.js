"use strict"

const mongoose = require("mongoose");

// company_name
// location
// job_sector

const vacancySchema = new mongoose.Schema({
    job_title: { type: String, required: true },
    job_description: { type: String, required: true },
    responsibilities: [{ type: String }],
    education_qualification: { type: String, required: true },
    experiance: { type: String, required: true },
    salary: { type: String, required: true },
    
    // full time, part time, remote, contract
    job_type: { type: String, required: true }, 
    skill: [{ type: String }],
    vacancies: { type: Number, required: true },
    deadline: { type: Date, required: true },
    is_open: { type: Boolean, default: true },
},{
    timestamps: true
})

module.exports = mongoose.model("vacancy", vacancySchema);
