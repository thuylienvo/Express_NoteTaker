const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { notes } = require('./db/db.json');

// // PKG TO PULL IN UUID
// const { v4: uuidv4 } = require('uuid');




// CREATE A NOTE 
function createNote (body, notesArr){
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db/json'),
        JSON.stringify({notes}), null, 2
    );
    return note;
};


// GET ACCESS TO DB.JSON FILE 
router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNote(req.body, notes);
    res.json(note)
});



module.exports = router;