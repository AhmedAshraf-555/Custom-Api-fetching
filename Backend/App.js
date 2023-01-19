const express = require("express");
const cors =require("cors")
const app = express();
const nature = require("./Api")
const port = 4000;
app.use(cors());
app.get("/", (req, res) => {
    res.json({nature}); 
});
app.all("*", (req, res) => {
    res.send(
        `<h1>Oops!</h1>
        <h2>404 page not found</h2>`
    )
})



app.listen(port, () => {
console.log(`server is listening on port ${port}`);
 }
);
