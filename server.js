const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

// JS files 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public file 
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  }); 