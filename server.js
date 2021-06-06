// DEPENDENCIES
const express = require('express');

const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

// SET UP EXPRESS 
const app = express();

// JS files 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// PUBLIC FILES 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// REQUIRED ROUTES 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// app.get('/api/notes', (req, res) => {
//     res.send('I hope this works!');
//   });

// START SERVER 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  }); 