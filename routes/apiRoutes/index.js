const router = require('express').Router();
const { json } = require('express');
const fs = require('fs');
const path = require('path');
let { notes } = require('../../db/db.json');

// PKG TO PULL IN UUID
const { uuid } = require('uuidv4');

// CREATE A NOTE 
function createNote (body, notesArray){
    const note = body;
    note.id = uuid();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
};

//ADD ID TO GRAB AND DELETE
function noteId (id, notesArray) {
    for(let i = 0; i < notesArray.length; i++){
        if(notesArray[i].id === id){
            return i;
        }
    }
}


//DELETE A NOTE
function deleteNote(id, notesArray){
    const noteIndex = noteId(id, notesArray);
    notesArray.splice(noteIndex, 1);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return id;

}

// GET ACCESS TO DB.JSON FILE 
router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let note = createNote(req.body, notes);
    console.log(note)
    res.json(note)
});  

router.delete('/notes/:id', (req, res) => {
    const idNumber = req.params.id;
    res.json(deleteNote(idNumber, notes))
});

module.exports = router;