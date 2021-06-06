const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let { notes } = require('./db/db.json');

// PKG TO PULL IN UUID
// const { v4: uuidv4 } = require('uuid');


//get access to db.json file
router.get('/notes', (req, res) => {
    res.json(notes);
});

//post new notes
// router.post('/notes', function(req, res) {
//     req.body.id = uuidv4();

    //use function to take in data to send
//     const newNote = addNewNote(req.body, notes);
//     res.json(newNote);
// });


// DELETE REQUEST 




module.exports = router;