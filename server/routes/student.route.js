const express = require("express");
const studentRoute = express.Router();
const StudentModel = require("../models/Student");

//Get all data
studentRoute.route("/").get((req,res,next) => {

    StudentModel.find((err,data) => {
        if(err) {
            return next(err);
        }
        else {
            res.json(data);
        } 
    })
});

//Create student data
studentRoute.route('/create-student').post((req,res,next) => {
    StudentModel.create(req.body, (err,data) => {
        if(err) {
            return next(err);
        }
        else {
            res.json(data);
        }
    })
});

// Edit student data 
studentRoute.route("/edit-student/:id").get((req,res,next) => {
    StudentModel.findById(req.params.id, (err,data) => {
        if(err) {
            return next(err);
        }
        else {
            res.json(data);
        }
    });
});

// Update student data
studentRoute.route("/update-student/:id").put((req,res,next) => {

    StudentModel.findByIdAndUpdate(req.params.id, req.body,function (err,data) {
        if(err) {
            return next(err)
        }
        else {
            res.json(data);
            console.log("student updatad")
        }
    })
});

// Delete student data
studentRoute.route("/delete-student/:id").delete((req,res,next) => {
    StudentModel.findByIdAndDelete(req.params.id, (err, data) => {
        if(err) {
            return next(err);
        }
        else {
            res.json({msg:data});
        }
    })
})

module.exports = studentRoute;