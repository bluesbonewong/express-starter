const express = require("express");
const app = express();
const port = 8888;

app.get("/xxx", (req, res) => {
    res.send("好\n");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
