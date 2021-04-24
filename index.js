// Imports
const express = require('express');
const cors = require('cors')

// Initial Config
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

// Initial API
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the server !')
})

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));