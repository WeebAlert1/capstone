const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const {
    createShow,
} = require('./controller')

app.post('/api/shows', createShow);

app.listen(4000, () => console.log("Server running on port 4000"));
