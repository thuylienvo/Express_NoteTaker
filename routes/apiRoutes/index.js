const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let { notes } = require('../../db/db.json');


// CREATE A NOTE 
function createNote (body, notesArray){
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
};

function noteId (id, notesArray) {
    for(let i = 0; i < notesArray.length; i++){
        if(notesArray[i].id === id){
            return i;
        }
    }
}

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
    console.log(req.body.id);
    const newNote = createNote(req.body, notes);
    res.json(newNote)
});

router.delete('/notes:id', (req, res) => {

    const idNumber = req.params.id;
    res.json(deleteNote(idNumber, notes))
});

module.exports = router;