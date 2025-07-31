const express = require('express');
const router = express.Router();
const record = require('../models/records_model');

// Gets records of all students
router.get('/',
    function(request, response) {
        record.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

// Get one student's records by id
router.get('/:id?',
    function(request, response) {
        record.getOne(request.params.id, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });


// Add record
router.post('/',
    function(request, response) {
        record.addRecord(request.body, function(err, dbResult){
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });


router.delete('/', function(request, response){
    record.deleteRecord(request.body, function(err, dbResult){
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});


router.put('/', function(request, response) {
    record.updateRecord(request.body, function(err, dbResult){
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});


module.exports = router;