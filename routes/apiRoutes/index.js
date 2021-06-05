const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');



// PKG TO PULL IN UUID
const { v4: uuidv4 } = require('uuid');

// ROUTES 
router.post('/notes', (req, res) => {
    console.log('Proof this is somewhat working XP')

    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

//ADD A NOTE




//DELETE A NOTE

module.exports = router;