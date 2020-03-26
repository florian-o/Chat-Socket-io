const express = require('express');
const port = 8080;

const app = express();

app.listen(port, () => {
    console.log(`ecoute sur le port ${port}`);    
});


app.use(express.static('public'));

