"use strict"

const { Type } = require("@sinclair/typebox")

module.exports = async function(fastify, options){
    fastify.route({
        url: "",
        method: "GET",
        schema: {
            tags: ["Vacancy"],
            response:{
                200: Type.Array(
                    Type.Object({
                        _id: Type.String(),
                        job_title: Type.String(),
                        job_description: Type.String(),
                        responsibilities: Type.Array(Type.String()),
                        education_qualification: Type.String(),
                        experiance: Type.String(),
                        salary: Type.String(),
                        job_type: Type.String(), 
                        skill: Type.Array(Type.String()),
                        vacancies: Type.Number(),
                        deadline: Type.String(),
                        is_open: Type.Boolean(),
                    })
                ) || Type.Array()
            }
        },
        handler: async (request, reply)=>{
            try{
                const { VacancyModel } = fastify.db.models;
                const data = await VacancyModel.find();
                reply.code(200).send(data);
            }catch(err){
                reply.code(500).send(err);
            }
        }
    });

    fastify.route({
        url: "/:id",
        method: "GET",
        schema: {
            tags: ["Vacancy"],
            params: Type.Object({
                id: Type.String()
            }),
            response:{
                200: Type.Object({
                    _id: Type.String(),
                    job_title: Type.String(),
                    job_description: Type.String(),
                    responsibilities: Type.Array(Type.String()),
                    education_qualification: Type.String(),
                    experiance: Type.String(),
                    salary: Type.String(),
                    job_type: Type.String(), 
                    skill: Type.Array(Type.String()),
                    vacancies: Type.Number(),
                    deadline: Type.String(),
                    is_open: Type.Boolean(),
                }) 
            }
        },
        handler: async (request, reply)=>{
            try{
                const { id } = request.params;
                const { VacancyModel } = fastify.db.models;
                const data = await VacancyModel.findById(id);
                reply.code(200).send(data);
            }catch(err){
                reply.code(500).send(err);
            }
        }
    });


    fastify.route({
        url: "",
        method: "POST",
        schema: {
            tags: ["Vacancy"],
            body: Type.Object({
                job_title: Type.String(),
                job_description: Type.String(),
                responsibilities: Type.Optional(Type.Array(Type.String())),
                education_qualification: Type.String(),
                experiance: Type.String(),
                salary: Type.String(),
                job_type: Type.String(), 
                skill: Type.Array(Type.String()),
                vacancies: Type.Number(),
                deadline: Type.String(),
            }),
            response:{
                200: Type.Object({
                    message: Type.String()
                })          
            }
        },
        handler: async (request, reply)=>{
            try{
                const body = request.body;
                const { VacancyModel } = fastify.db.models;
                await VacancyModel.create(body);
                reply.code(200).send({
                    message: "Job Created!"
                });
            }catch(err){
                reply.code(500).send(err);
            }
        }
    });
}